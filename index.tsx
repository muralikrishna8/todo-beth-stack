import Elysia from "elysia";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";

const BaseHtml = ({ children }: elements.Children) =>
    <html lang="en">
        <head>
            <title>📜 Todo app</title>
        </head>
        <body>
            {children}
        </body>
    </html>

const app = new Elysia()
    .use(html())
    .get("/", ({ html }) => html(<BaseHtml>Hello World</BaseHtml>))
    .listen(3000);

console.log(`Server started on port: http://localhost:${app.server?.port}`)
