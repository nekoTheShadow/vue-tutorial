@echo off

REM http://192.168.99.100:8080/

set SUBCMD=
set /p SUBCMD="Sub Command ? ---> "

docker rmi kanban-app-%SUBCMD%-image 
docker build -f docker_%SUBCMD% -t kanban-app-%SUBCMD%-image .
docker run -it ^
           --rm ^
           -p 8080:8080 ^
           --name kanban-app-%SUBCMD%-container ^
           kanban-app-%SUBCMD%-image