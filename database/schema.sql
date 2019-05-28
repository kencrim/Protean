DROP DATABASE IF EXISTS calorie_counter;
CREATE DATABASE calorie_counter;

USE calorie_counter;

CREATE TABLE IF NOT EXISTS ingredients (
  `ingredient_id` INTEGER NOT NULL AUTO_INCREMENT,
  `calories` DOUBLE(3,2) DEFAULT NULL,
  `protein` DOUBLE(3,2) DEFAULT NULL,
  `fat` DOUBLE(3,2) DEFAULT NULL,
  `carbs` DOUBLE(3,2) DEFAULT NULL
  PRIMARY KEY (`ingredient_id`)
);

CREATE TABLE IF NOT EXISTS meals (
  `meal_id` INTEGER NOT NULL AUTO_INCREMENT,
  `calories` DOUBLE(3,2) DEFAULT NULL,
  `protein` DOUBLE(3,2) DEFAULT NULL,
  `fat` DOUBLE(3,2) DEFAULT NULL,
  `carbs` DOUBLE(3,2) DEFAULT NULL,
  `ingredients` VARCHAR(200) DEFAULT NULL
  PRIMARY KEY (`ingredient_id`)
);

CREATE TABLE IF NOT EXISTS meal_logs (
  `log_id` INTEGER NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(30) DEFAULT NULL,
  `protein` DOUBLE(3,2) DEFAULT NULL,
  `fat` DOUBLE(3,2) DEFAULT NULL,
  `carbs` DOUBLE(3,2) DEFAULT NULL,
  `ingredients` VARCHAR(200) DEFAULT NULL,
  `timestamp` DATETIME DEFAULT NULL
  PRIMARY KEY (`log_id`)
);

/*  Execute this file from the command line by running:
 *    mysql -u root < database/schema.sql
 *  from the root directory to create the database 
 *  and the tables. This command will also be run as part of the 
 *	npm start script */