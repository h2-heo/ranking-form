# React in TypeScript Boilerplate with Docker

React application in TypeScript.

## Prerequisites

One of the following is required to run:

- Docker
- Yarn

## How to deploy

To run the project you need to follow the procedure below. There are two ways, you only need to do one.

### Deploy by Docker

```sh
docker-compose up -d
```

Then you can connect to http://localhost:3000.

To stop, enter:

```sh
docker-compose down
```

### Deploy by Yarn

```sh
./run.sh
```

## How to development

To run for development you need to follow the procedure below. There are two ways, you only need to do one.

The difference from deploy is that when you modify the source, it will be updated immediately.

### Develop by Docker

```sh
NODE_ENV=development docker-compose up -d
```

Then you can connect to http://localhost:3000.

To stop, enter:

```sh
docker-compose down
```

### Develop by Yarn

```sh
NODE_ENV=development ./run.sh
```
