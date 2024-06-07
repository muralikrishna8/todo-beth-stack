import type { Todo } from "../db/schema";
import Checkbox from "../ui_components/checkbox";

export const TodoItem = ({ content, completed, id }: Todo) => {
  const todoId = `todo_${id}`;

  return (
    <div id={todoId} class="flex flex-row space-x-3 m-3">
      <div class="inline-flex items-center">
        <Checkbox
          checked={completed}
          id={`${id}`}
          hx-post={`/todos/toggle/${id}`}
          hx-swap="outerHTML"
          hx-target={`#${todoId}`}
        ></Checkbox>
      </div>
      <p
        id={id}
        class={
          completed ? "text-primary line-through decoration-1 opacity-50" : ""
        }
      >
        {content}
      </p>
      <button
        hx-delete={`/todos/${id}`}
        hx-target="closest div"
        hx-swap="outerHTML"
        title="delete todo"
      >
        🗑️
      </button>
    </div>
  );
};
