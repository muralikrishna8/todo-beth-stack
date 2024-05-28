import type { Todo } from "../todos";
import { TodoItem } from "./todoItem";

export const TodoList = ({ todos }: { todos: Todo[] }) => <ul>
    {todos.map(todo => <li><TodoItem {...todo}/></li>)}
</ul>