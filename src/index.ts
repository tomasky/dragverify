import captcha from "@itriton/captcha"

import fastify from "fastify"
import type { FastifyInstance } from "fastify"
import type { Server, IncomingMessage, ServerResponse } from "http"

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({ logger: true })

// Add our route handler with correct types
server.get("/api/captcha", async (req: any, res: any) => {
  const t = req.query
  const ret = await captcha.create()
  res.code(200).send({ data: { b: ret.backgroundImage, c: ret.jigsawImage } })
})

// Start your server
server.listen({ port: 8080 }, (err: any, _: any) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})
