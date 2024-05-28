import type { Todo } from "../todos";

export const TodoItem = ({ content, completed, id }: Todo) => <div class="flex flex-row space-x-3">
    <input
        type="checkbox"
        checked={completed}
        hx-post={`/todos/toggle/${id}`}
        hx-target="closest div"
        hx-swap="outerHTML"
    />
    <p>{content}</p>
    <button class="text-red-500">🗑️</button>
</div>