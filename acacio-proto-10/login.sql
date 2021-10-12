CREATE table login (
	id INT NOT NULL auto_increment unique,
    name VARCHAR(84),
    email VARCHAR(84) unique,
    password VARCHAR(128),
    PRIMARY KEY(id)
);