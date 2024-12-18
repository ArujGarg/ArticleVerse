import { createPostInput, updatePostInput } from "@arujgarg/post-your-articles-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";


export const postRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>()

postRouter.use('/*', async (c, next) => {
        const authHeader = c.req.header("Authorization") || "";
        const user = await verify(authHeader, c.env.JWT_SECRET) as{ id: string}
        try {
            if(user){
                c.set("userId", user.id)
                await next();
            } else {
                c.status(403);
                return c.json({
                    message: "you are not logged in"
                })
            }
        } catch (error) {
            c.status(403);
            return c.json({
                message: "you are not logged in"
            })
        }
});

postRouter.post('/', async (c) => {
	const userId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
    const { success } = createPostInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message: "Inputs not correct"
      })
    }
	const post = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: Number(userId)
		}
	});
	return c.json({
		id: post.id,
        post: post
	});
})


postRouter.put('/', async (c) => {
    const body = await c.req.json();
    const { success } = updatePostInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message: "Inputs not correct"
      })
    }
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const post = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content,
        }
    })

    return c.json({
        id: post.id,
        post: post
    })
})


//have to add pagination -> (returning lets say only 10 posts in one go and the user can ask for more posts by scrolling)
postRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const posts = await prisma.post.findMany();

    return c.json({
        posts
    })
})

postRouter.get('/:id', async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const post = await prisma.post.findFirst({
            where: {
                id: Number(id)
            }
        })

        return c.json({
            post
        })
    } catch (error) {
        console.log(error);
        c.status(411);
        return c.json({
            message: "Error while fetching data",
        })

        
    }
})


  

