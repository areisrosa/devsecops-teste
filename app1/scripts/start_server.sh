#!/bin/bash
cd /home/ubuntu/devsecops-teste/app1
docker pull areisr/devsec:latest
docker stop junto-app || true
docker rm junto-app || true
docker run -d -p 3000:3000 --name junto-app areisr/devsec:latest