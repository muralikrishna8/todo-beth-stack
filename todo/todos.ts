export type Todo = {
    id: number;
    content: string;
    completed: boolean;
}

export const db: Todo[] = [
    {
        completed: false,
        id: 1,
        content: "this is some todo"
    }
];

