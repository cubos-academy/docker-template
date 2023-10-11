# Instructions for starting a project with docker

## Configuration

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
docker exec -it node-front-react sh
```

Command to stop the container
```bash
docker composer stop
```

Command to delete a container
```bash
docker composer down
```
