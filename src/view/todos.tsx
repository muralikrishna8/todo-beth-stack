import type { Todo } from "../db/schema";
import { TodoForm } from "./todoForm";
import { TodoItem } from "./todoItem";

export const TodoList = ({ todos }: { todos: Todo[] }) =>
    <ul class="p-5 bg-white w-10/12 md:w-8/12 lg:w-5/12 rounded-lg shadow-sm divide-y divide-dashed">
        {todos.map(todo => <li><TodoItem {...todo} /></li>)}
        <TodoForm />
    </ul>