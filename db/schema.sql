### Schema
CREATE DATABASE burgers_db;
USE burger_db;

CREATE TABLE burger
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN
	PRIMARY KEY (id)
);

### Tabel function to display boolean as True or False
SELECT * FROM burgers_db.burger;

SELECT 
    id, 
    burger_name, 
    IF(devoured, 'true', 'false') devoured
    
FROM
    burger;