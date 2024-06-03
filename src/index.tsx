import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static";
import { eq } from "drizzle-orm/sqlite-core/expressions";
import Elysia, { error, t } from "elysia";
import { db } from "./db";
import { todos } from "./db/schema";
import BaseHtml from "./view/base-html";
import { TodoItem } from "./view/todoItem";
import { TodoList } from "./view/todos";

const idValidation = {
    params: t.Object({
        id: t.Numeric()
    })
};

const app = new Elysia()
    .use(html())
    .use(staticPlugin())
    .get("/", ({ html }) => html(<BaseHtml />))
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
