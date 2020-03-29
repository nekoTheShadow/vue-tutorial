@echo off

REM http://192.168.99.100:8080/

set SUBCMD=
set /p SUBCMD="npm run ??? ---> "

docker rmi kanban-app-image 
docker build -f docker_%SUBCMD% -t kanban-app-image .
docker run -it ^
           -p 8080:8080 ^
           --rm ^
           --name kanban-app-container ^
           kanban-app-image