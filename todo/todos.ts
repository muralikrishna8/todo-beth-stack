export type Todo = {
    id: ReturnType<Crypto["randomUUID"]>;
    content: string;
    completed: boolean;
}

export const db: Todo[] = [
    {
        completed: false,
        id: "123-123-123-123-123",
        content: "this is some todo"
    },
    {
        completed: true,
        id: "123-123-123-123-124",
        content: "this is another todo"
    }
];

