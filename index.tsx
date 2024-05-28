import Elysia, { t } from "elysia";
import { html } from "@elysiajs/html";
import type { Children } from "typed-html";
import { TodoList } from "./todo/view/todos";
import { db, type Todo } from "./todo/todos";
import { TodoItem } from "./todo/view/todoItem";

const idValidation = {
    params: t.Object({
        id: t.String()
    })
};

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
    .post("/todos/toggle/:id", ({ params }) => {
        const todo = db.find(({ id }: Todo) => params.id === id);
        if (todo) {
            todo.completed = !todo.completed
            return <TodoItem {...todo} />
        }
    }, idValidation)
    .delete("/todos/:id", ({ params }) => {
        const todo = db.find(({ id }: Todo) => params.id === id);
        if (todo) {
            db.splice(db.indexOf(todo), 1);
        }
    }, idValidation)
    .post("/todos", ({ body }) => {
        const newTodo: Todo = {
            id: crypto.randomUUID(),
            completed: false,
            content: body.content
        };
        db.push(newTodo);
        return <TodoItem {...newTodo} />
    }, {
        body: t.Object({
            content: t.String()
        })
    })
    .listen(3000);

console.log(`Server started on port: http://localhost:${app.server?.port}`)

const BaseHtml = ({ children }: Children) =>
    <html lang="en">
        <head>
            <title>📜 Todo app</title>
            <script src="https://unpkg.com/htmx.org@1.9.12"></script>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://unpkg.com/hyperscript.org@0.9.12"></script>
        </head>
        {children}
    </html>