import Elysia from "elysia";
import { html } from "@elysiajs/html";
import type { Children } from "typed-html";

const app = new Elysia()
    .use(html())
    .get("/", ({ html }) => html(
        <BaseHtml>
            <button hx-post="/clicked" hx-swap="outerHTML">get server response</button>
        </BaseHtml>
    ))
    .post("/clicked", <p>Response from server</p>)
    .listen(3000);

console.log(`Server started on port: http://localhost:${app.server?.port}`)

const BaseHtml = ({ children }: Children) =>
    <html lang="en">
        <head>
            <title>📜 Todo app</title>
            <script src="https://unpkg.com/htmx.org@1.9.12"></script>
        </head>
        <body>
            {children}
        </body>
    </html>