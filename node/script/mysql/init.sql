CREATE DATABASE IF NOT EXISTS dbpeople;
CREATE TABLE IF NOT EXISTS `dbpeople`.`people`
(
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR
(255) NOT NULL
);