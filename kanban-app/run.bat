@echo off

REM http://192.168.99.100:8080/

set SUBCMD=
set /p SUBCMD="Sub Command ? ---> "

set t=%time: =0%

set yyyy=%date:~0,4%
set mm=%date:~5,2%
set dd=%date:~8,2%
set hh=%t:~0,2%
set nn=%t:~3,2%
set ss=%t:~6,2%

set imagename=kanban-app-%SUBCMD%-%yyyy%%mm%%dd%%hh%%nn%%ss%

docker build -f docker_%SUBCMD% -t %imagename% .
docker run -it ^
           --rm ^
           -p 8080:8080 ^
           %imagename%