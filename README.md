#Silicon Clicker

[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)



## Description



## WALK-THROUGH VIDEO

[Wall-Through-Video]()

## Table of Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Credits](#credits)
-   [License](#license)
-   [Contributing](#contributing)
-   [Questions](#questions)

[Play](https://silicon-clicker.herokuapp.com/)
## Installation

To install this application, first, branch the Github Repo and clone the repo to your local machine. Then, you will need to install the node dependencies which can be done by running the `npm install` command in your terminal/bash shell.


After the dependencies have been installed, you will need to populate your MySQL database. This can be done with dummy data that is found in the sqlFiles folder. There are two files for this. First the db.sql which will creat the database and the three tables for employee, role, and department.
Second, there is a seed.sql file which will populate the database with data for each table.

After populating the data, you will need to add your MySQL password to the server.js file to ensure tha the connection to the database can be made and requests for actions can be pushed to the database.

Once this has been completed, you are ready to use the application!

## Usage

Once everything has been set up, the application can be launched by running the command `nodemon index.js` or `npm start`. Then the application is running on port http://localhost:3001/

## Credits

This application was completed by:
                                  Shellby Jordan(Scrum-Master)
                                  Jesus Ramirez Arroyo(Driver)
                                  Cynthia Mohan(Driver)
                                  Senait Gerezgiher(Driver)
for the interactive full-stack project for UC Berkeley's Full Stack web-developer Bootcamp.

Dependencies for this project include the node modules:

dotenv -used for loading environment variables from a .env file into process.env.
express - used for providing small, robust tooling for HTTP servers, making it a great solution for single page applications, web sites, hybrids, or public HTTP APIs.
express-handlebars - used to render web pages to the client side from data on the server-side.
express-session - used to store data between HTTP requests.
mysql2 - is relational database mangement system based on SQL(Structured Query Language).
pug - is a high performance template engine.
sequelize - solid transaction support, relations, eager and lazy loading, read replication and more. 
sqlite3 -  allows the user to manually enter and execute SQL statements against an SQLite database.




## License
                          GPL V2
    				Copyright (C) 2021  Shellby-Jordan
                                        Cynthia-Mohan
                                        Jesus-Ramirez-Arroyo
                                        Senait-Gerezgiher

	This program is free software; you can redistribute it and/or
	modify it under the terms of the GNU General Public License
	as published by the Free Software Foundation; either version 2
	of the License, or (at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA

## Contributing

If you would like to contribute to this application, please feel free to contact us to the gitHub link found in the questions section and we can discuss how to collaborate and enhance this application.

## Tests

N/A

## Questions

-   For any questions related to this applicaiton, please contact us at:

-   Please use this link to access our Github Profile: [GitHub-Shellby-Jordan](https://github.com/Kingly77)
                                                       [GitHub-Cynthia](https://github.com/CynthiaMohan)
                                                       [GitHub-Jesus-Ramirez-Arroyo](https://github.com/JR1994-CA)
                                                       [GitHub-Senait-Gerezgiher](https://github.com/senait77)
