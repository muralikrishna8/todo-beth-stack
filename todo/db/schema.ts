import type { InferSelectModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todo", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    content: text("content").notNull(),
    completed: integer("completed", { mode: "boolean" }).notNull().default(false)
})

export type Todo = InferSelectModel<typeof todos>
