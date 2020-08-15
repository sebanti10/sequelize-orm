# sequelize-orm

This is a basic ORM model that has been implemented using Sequelize, a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. This example has shown uses of SQLite and MySql. However, the option to switch between the aforementioned relational databases has been given.


## Folder Structure

The folder structure is as follows-
```
sequelize-orm
|--- app.js - the entry point
|--- src
		|--- controllers - contains the database connection
				|--- ormController.js
		|--- models - the model is defined here
				|--- ormModel.js
		|--- routes - contains all the routes
				|--- ormRoutes.js
|--- chinook.db - the database to be used
|--- package.json
|--- package-lock.json
```

## Switch to different relational databases

You can switch to different relational databases by following the steps mentioned below:
 1. Go to /src/controllers/ormController.js
 2. Uncomment the desired code as explained below- <br>
	**- SQLite:** Uncomment option 1 (line 6) 
			 
		//1. Passing a connection URI (for sqlite)
        module.exports = new Sequelize('sqlite:chinook.db');
        
        //2. Passing parameters separately (for other dialects)
        /*module.exports = new Sequelize('chinook', process.env.USERNAME, '', {
        host: 'localhost',
        // one of 'mysql' | 'mariadb' | 'postgres' | 'mssql'
        dialect: 'mysql'
        });*/	
			 
	 **- MySQL and other dialects:** Uncomment option 2 (line 8-13)
        
        //1. Passing a connection URI (for sqlite)
        /* module.exports = new Sequelize('sqlite:chinook.db'); */
        
        //2. Passing parameters separately (for other dialects)
        module.exports = new Sequelize('chinook', process.env.USERNAME, '', {
        host: 'localhost',
        // one of 'mysql' | 'mariadb' | 'postgres' | 'mssql'
        dialect: 'mysql'
        });


## Database

The database used here is an extension of the **chinook** database. 
A very simple table, **playlists** has been used. Its schema in MySQL looks as below-

|Field|Type|Null|Key|Default|Extra|
|--|--|--|--|--|--|
| PlaylistId | int(11) | NO | PRI | NULL | auto_increment
| Name | varchar(120) | YES |  | NULL | 

Around 1000 rows has been added so far.
