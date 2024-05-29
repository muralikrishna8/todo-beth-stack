# todo-beth

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.10. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.


To get the AuthToken for Turso

```bash
turso db tokens create todo-beth
```

create a `.env` file and add the following 
```
DATABASE_URL=<get from turso db show todo-beth>
DATABASE_AUTH_TOKEN=
```

To run the schema

```bash
bunx drizzle-kit push
```
