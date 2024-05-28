import Elysia from "elysia";
import { html } from "@elysiajs/html";

const baseHtml = () => 
<html lang="en">
<head>
    <title>📜 Todo app</title>
</head>
<body>
    <h1>ToDo app with BETH stack</h1>
</body>
</html>

const app = new Elysia()
    .use(html())
    .get("/", baseHtml)
    .listen(3000);

console.log(`Server started on port: http://localhost:${app.server?.port}`)
