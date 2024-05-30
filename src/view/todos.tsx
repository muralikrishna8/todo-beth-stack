import type { Todo } from "../db/schema";
import { TodoForm } from "./todoForm";
import { TodoItem } from "./todoItem";

export const TodoList = ({ todos }: { todos: Todo[] }) => <ul class="p-5 bg-white rounded-lg shadow-sm">
    {todos.map(todo => <li><TodoItem {...todo}/></li>)}
    <TodoForm />
</ul>