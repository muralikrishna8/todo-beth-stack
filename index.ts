import Elysia from "elysia";

const elysia = new Elysia()
elysia.get("/", () => "Hello World!!").listen(3000)

console.log(`Server started on port: http://localhost:${elysia.server?.port}`)