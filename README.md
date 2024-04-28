pip install requests mysql-connector-python

------------------------------------------------------------------------------------------------------------------------------------------------------------------
MYSQL SETUP
1)Install MySQL Server: If you haven't already, you need to install MySQL Server on your machine. You can download it from the official MySQL website: 

https://dev.mysql.com/downloads/mysql/

2)Installation Process: Follow the installation instructions provided for your operating system. During the installation process, you will be prompted to set a root password for the MySQL Server. Remember this password as you'll need it later.
3)Start MySQL Server: After installation, start the MySQL Server. The process for starting the server varies depending on your operating system. On most systems, you can start the MySQL Server service from the command line or through a graphical interface.
4)Connect to MySQL Server: Once the MySQL Server is running, you can connect to it using the MySQL command-line client or a graphical client like MySQL Workbench.
For the command-line client, open a terminal or command prompt and type: 

mysql -u root -p

You will be prompted to enter the root password you set during installation.
For MySQL Workbench or any other graphical client, launch the client application and use the root username and password to connect to the server.
5)Create a Database: After connecting to the MySQL Server, you can create a new database using SQL commands. For example: 

CREATE DATABASE crypto_prices;

6)Create a Table: Once the database is created, you can create a table to store cryptocurrency prices. For example: 

USE crypto_prices;

CREATE TABLE prices (
    id INT AUTO_INCREMENT PRIMARY KEY,
    symbol VARCHAR(10),
    price DECIMAL(18, 8),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

This table will have columns for the symbol of the cryptocurrency, its price, and a timestamp indicating when the price was stored.

7)Grant Privileges (Optional): You may need to grant privileges to users who will access the database. For development purposes, you can use the root user. In a production environment, it's recommended to create a separate user with limited privileges.
------------------------------------------------------------------------------------------------------------------------------------------------------------------

pip install flask flask-sqlalchemy requests