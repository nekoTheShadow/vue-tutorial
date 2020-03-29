@echo off

REM http://192.168.99.100:8080/

docker rmi vue-tutorial-image
docker build -t vue-tutorial-image .
docker run -it -p 8080:8080 --rm --name vue-tutorial-app vue-tutorial-image