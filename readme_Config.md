Steps:-
Clone https://github.com/USSourceLink/ORS from github

--Server configuration--
--open terminal in PowerShell
Run Command :- cd Server
Run Command :- npm install (this will install all required packages for server project)
run Command :- node server.js  (start server on 5000 port)

/Server/db.js file has database connection string. Please make sure its pointing to right database/server.

--Client Configuration--
--Open Terminal in visual studio code
Run Command :- cd..
Run command :- cd Client
Run command :- npm install (this will install all required packages client project)
Run command :- npm start   (this will run the application in the browser under 3000 port, localhost:3000

--note
for new model import use below command inside sequelize folder
sequelize-auto -o "./models" -d sequelize_auto_test -h localhost -u my_username -x my_password -e mssql -t table_name

