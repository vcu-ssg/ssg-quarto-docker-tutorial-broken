# Apache-PHP docker-compose example

In this example, we use docker and docker-compose to locally host an apache/php server 
and local web page.  The web page connects to the CMSC508.COM mysql server and lists
all the tables in the HR database.

*./site* - this folder contains the web site.  For this example, it's a simple PHP page that lists table in a web site.

*./docker-apache-php* - a docker file that creates the necessary apache-php image from the docker registry.

*./docker-compose.yml* - a docker compose file that create the docker-apache-php image, remaps our *./site* folder
to the web server root, and connects our local port 8080 to the web server port 80 inside the container.

## Running the example

```shell
docker-compose up -d
```

If all goes well, you can visit: <http://localhost:8080> to see a listing tables in the HR database.
