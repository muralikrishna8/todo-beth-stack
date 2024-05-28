import Elysia from "elysia";
import { html } from "@elysiajs/html";
import type { Children } from "typed-html";
import { TodoList } from "./todo/view/todos";
import { db } from "./todo/todos";

const app = new Elysia()
    .use(html())
    .get("/", ({ html }) => html(
        <BaseHtml>
            <body
                class="flex w-full h-screen justify-center items-center"
                hx-get="/todos"
                hx-trigger="load"
            ></body>
        </BaseHtml >
    ))
    .get("/todos", <TodoList todos={db} />)
    .listen(3000);

console.log(`Server started on port: http://localhost:${app.server?.port}`)

const BaseHtml = ({ children }: Children) =>
    <html lang="en">
        <head>
            <title>📜 Todo app</title>
            <script src="https://unpkg.com/htmx.org@1.9.12"></script>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        {children}
    </html>