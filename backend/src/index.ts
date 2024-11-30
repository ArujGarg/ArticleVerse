import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { jwt, sign, verify } from "hono/jwt"
import { userRouter } from './routes/user'
import { postRouter } from './routes/post'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>()

app.route("/api/v1/user", userRouter);
app.route("/api/v1/post", postRouter);


export default app
