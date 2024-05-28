import type { Todo } from "../todos";
import { TodoForm } from "./todoForm";
import { TodoItem } from "./todoItem";

export const TodoList = ({ todos }: { todos: Todo[] }) => <ul>
    {todos.map(todo => <li><TodoItem {...todo}/></li>)}
    <TodoForm />
</ul>