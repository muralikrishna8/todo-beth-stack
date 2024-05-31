import Elysia, { error, t } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import type { Children } from "typed-html";
import { TodoList } from "./view/todos";
import { db } from "./db";
import { type Todo, todos } from "./db/schema";
import { TodoItem } from "./view/todoItem";
import { eq } from "drizzle-orm/sqlite-core/expressions";
import Footer from "./view/footer";

const idValidation = {
    params: t.Object({
        id: t.Numeric()
    })
};

const app = new Elysia()
    .use(html())
    .use(staticPlugin())
    .get("/", ({ html }) => html(
        <BaseHtml>
            <main
                class="flex w-full h-screen justify-center items-center text-zinc-800"
                hx-get="/todos"
                hx-trigger="load"
            ></main>
        </BaseHtml >
    ))
    .get("/todos", async () => {
        const data = await db.select().from(todos).all();
        return <TodoList todos={data} />
    })
    .post("/todos/toggle/:id", async ({ params }) => {
        const oldTodo = await db.select()
            .from(todos)
            .where(eq(todos.id, params.id))
            .get()

        if (oldTodo) {
            const updatedTodo = await db.update(todos)
                .set({ completed: !oldTodo.completed })
                .where(eq(todos.id, oldTodo.id))
                .returning().get()
            return <TodoItem {...updatedTodo} />
        }
    }, idValidation)
    .delete("/todos/:id", async ({ params }) => {
        await db.delete(todos).where(eq(todos.id, params.id))
    }, idValidation)
    .post("/todos", async ({ body }) => {
        if (body.content.length === 0) {
            return error(400, "Content cannot be empty")
        }
        const todo = await db.insert(todos)
            .values({ content: body.content })
            .returning().get();
        return <TodoItem {...todo} />
    }, {
        body: t.Object({
            content: t.String()
        })
    })
    .listen(process.env.PORT as string);

console.log(`Server started on port: http://${app.server?.hostname}:${app.server?.port}`)

const BaseHtml = ({ children }: Children) =>
    <html lang="en">
        <head>
            <title>📜 Todo app</title>
            <script src="https://unpkg.com/htmx.org@1.9.12"></script>
            <script src="https://unpkg.com/htmx.org@1.9.12/dist/ext/response-targets.js"></script>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
            <link rel="stylesheet" href="public/style.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap" rel="stylesheet"></link>
        </head>
        <body class="bg-[#fafafa]">
            {children}
            <Footer />
        </body>
    </html>