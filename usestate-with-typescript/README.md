# React useState with Typescript

- <https://www.youtube.com/watch?v=arh6TCfWOWY>

```bash
docker build -t myapp .
```

```bash
docker images
```

```bash
docker run --name myapp_c1 myapp
```

```bash
docker ps
```

```bash
docker stop myapp_c1
```

```bash
docker run --name myapp_c2 -p 4000:4000 -d myapp
```

```bash
docker ps -a
```

```bash
docker start myapp_c2
```

```bash
docker image rm myapp
```

```bash
docker image rm myapp -f
```

```bash
docker container rm myapp_c2
```

```bash
docker system prune -a
```

```bash
docker build -t myapp:v1 .
```

```bash
docker run --name myapp_c -p 4000:4000 myapp:v1
```

```bash
 docker run --name myapp_c_nodemon -p 4000:4000 --rm  myapp:nodemon
```

```bash
docker run --name myapp_c_nodemon -p 4000:4000 --rm -v C:\Users\phili\mini-projects\docker-crash-course\docker-crash-course-lesson-5\api:/app   -v /app/node_modules myapp:nodemon
```

```bash
docker-compose up
```

```bash
docker-compose down --rmi all -v
```

```bash
 docker build -t philipstubbs13/myapi .
```

```bash
docker login
```

```bash
docker push philipstubbs13/myapi
```

```bash
docker pull philipstubbs13/myapi
```
