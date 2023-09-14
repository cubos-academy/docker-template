# Instructions for starting a node project with docker

# Template for back with node

For the project to work on your machine, you must have Docker installed and also Docker Compose.

The default configuration will allow the project to run on port 3000 on localhost.

## Repository configuration

Clone the repository with the following command:

```bash
  git clone git@github.com:cubos-academy/app-node-template.git
```

Open the project folder with the command:

```bash
  cd app-node-template
```

Copy the file to all files that have the .example extension to their name without the .example with the following command:

```bash
  cp .env.example .env
  cp docker-compose.yml.example docker-compose.yml
  cp Dockerfile.example Dockerfile
```

Assuming you have Docker and Docker Compose installed on your machine, start the containers with the following command:

```bash
docker compose up -d
```

ou

```bash
docker-compose up -d
```

After starting the containers, run the following command to connect to the container via ssh:

```bash
docker exec -it docker-back-template sh
```

Run migrations

```bash
npm run migrations
```

Run seeds
```bash
npm run seeds
```
