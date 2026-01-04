FROM oven/bun:latest

WORKDIR /app

COPY bun.lock .
COPY package.json .
RUN bun install --frozen-lockfile

EXPOSE 80

COPY . .

CMD [ "bun", "run", "start:prod" ]
