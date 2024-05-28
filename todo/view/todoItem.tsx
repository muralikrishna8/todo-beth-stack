import type { Todo } from "../todos";

export const TodoItem = ({ content, completed, id }: Todo) => <div class="flex flex-row space-x-3">
    <input type="checkbox" checked={completed} />
    <p>{content}</p>
    <button class="text-red-500">🗑️</button>
</div>