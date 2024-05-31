FROM oven/bun:1
WORKDIR /app
COPY package.json .
COPY bun.lockb .
RUN bun install

RUN mkdir -p src
COPY src/input.css ./src/input.css 
RUN bun run css

COPY . .
 
EXPOSE 8000
 
CMD ["bun", "src/index.tsx"]