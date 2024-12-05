# Create database script for Tutors

# Create the database
CREATE DATABASE IF NOT EXISTS tutors4you;
USE tutors4you;

# Create the tables
CREATE TABLE IF NOT EXISTS books (id INT AUTO_INCREMENT, name VARCHAR(50), level VARCHAR(50), price DECIMAL(5, 2) unsigned, hour DECIMAL(5, 2) unsigned, PRIMARY KEY (id));

CREATE USER IF NOT EXISTS 'tutors4you_app'@'localhost' IDENTIFIED BY '12345qwert';
GRANT ALL PRIVILEGES ON tutors4you.* TO ' tutors4you_app'@'localhost';