import { signinInput, signupInput } from "@arujgarg/post-your-articles-common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";



export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>();

userRouter.post('/signup', async (c) => {
  const prisma = new PrismaClient({
  datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      message: "Inputs are incorrect"
    })
  }
  
  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    })
    const token = await sign({ id: user.id}, c.env.JWT_SECRET);
    return c.text(token)

  } catch (error) {
    c.status(411);
    console.log(error)
    return c.text('User already exists')
  }
  
})

userRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

  try {
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message: "Inputs not correct"
      })
    }
    const user = await prisma.user.findFirst({
      where: {
      email: body.email,
      password: body.password
    }
    })

    if(!user){
      c.status(403);
      return c.json({
        error: "User not found",
      })
    }

    const jwt = await sign({id: user.id}, c.env.JWT_SECRET);
    return c.json({jwt: jwt})

    } catch (error) {
      c.status(411)
      console.log(error)
      return c.text('incorrect credentials')
    }
})
