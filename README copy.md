# WCCI Load Balancing Example Exercise

This is a lab demonstrating the functionality Load Balancing using NGINX. 

## Requirements

- Docker
- Docker Compose
- Postman

## Instructions

1. Clone this Repo: `git clone https://github.com/johnathan-wcci/LoadBalancing-Exercise.git`
2. Navigate into this folder: `cd LoadBalancing-Exercise`
3. Start the Docker Container: `docker compose -f .\docker-compose.yml up'
4. Open Postman.
5. Sent GET Request to `http://localhost:80`
6. Take note which backend server responds to each request

## Extra Credit

1. Try to use Server weights to send most of the requests to `T-Rex`.

## Resources

[NGINX Load Balancer Documentation](https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/)