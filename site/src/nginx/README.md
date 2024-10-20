# NGINX Docker Example

This is a very simple example for using NGINX to serve static web pages.  This example
assumes that you're comfortable with [docker fundamentals](https://vcu-ssg.github.io/ssg-quarto-docker-tutorial/fundamentals.html)

## Building the container

Before you can run a container you need to build it.  The following command
will build a container using the *Dockerfile* found in the current *.* directory.

The container will be assigned the *tag* (`-t`) *nginx-test* so that it is easier to reference later.

```shell
docker build -t nginx-test .
```

## Listing available images

```shell
docker images
```

## Listing available containers

To see all the containers available to run, including the one you created above, use:

```shell
docker container ls --all
```

```shell
docker ps --all
```

## Running an image

A image is run with a simple *docker run* command.  However, if you want to interact with
the container, we need to provide more detailed instructions on how it is to interact with our 
computer.  Otherwise, it will run completely isolated with no interactions with us!

When you type `docker run`, Docker first checks if the specified image exists locally; if not, it pulls the image from a registry like Docker Hub. Once the image is available, Docker creates a new container from the image, assigning it an isolated environment with its own file system, network interface, and processes. Finally, the container starts running, executing the command defined in the image or the one you specified in the `docker run` command.


```shell
docker run -d -p 8080:80 nginx-test
```

*-d* instructs docker to run this container detached from the current shell.

*-p* instructs docker to attach local port *8080* to port *80* in the container.  Browser requests sent to *localhost:8080* will be passed to the container through port *80*.

*nginx-test* is the human name of image from above.  Docker will use local images first, and if not found, try to load an image from the docker registry.

## Listing containers available or running

To see all the containers available to run, including the one you created above, use:

```shell
docker container ls --all
```

```shell
docker ps --all
```
