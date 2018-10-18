# node-mariadb-crud

Testing MariaDB integration with Node.js. This serves as a simple example on how to do it.

## Install

1. Install MariaDB: ``sudo apt install mariadb-server``
1. Create the database: ``CREATE DATABASE IF NOT EXISTS nodetest;``
1. Create the user: ``CREATE USER IF NOT EXISTS 'nodetester'@'localhost' IDENTIFIED BY 'testinode';``
1. Run ``npm install``

## Tests

1. Run ``npm install && npm test``
