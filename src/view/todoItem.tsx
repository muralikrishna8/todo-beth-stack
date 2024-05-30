import type { Todo } from "../db/schema";

export const TodoItem = ({ content, completed, id }: Todo) => <div class="flex flex-row space-x-3 m-3">
    <input
        type="checkbox"
        checked={completed}
        hx-post={`/todos/toggle/${id}`}
        hx-target="closest div"
        hx-swap="outerHTML"
        class="accent-[#eb9a78] w-4"
    />
    <p>{content}</p>
    <button
        hx-delete={`/todos/${id}`}
        hx-target="closest div"
        hx-swap="outerHTML"
        title="delete todo"
     >🗑️</button>
</div>