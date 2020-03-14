#!/usr/bin/env sh

image="${1:-kanelu-web}"
port1="${2:-80}"
port2="${3:-80}"

docker stop $image
docker system prune -a
docker pull yvkam/$image
docker run -p$port1:$port2 --name $image -d yvkam/$image
