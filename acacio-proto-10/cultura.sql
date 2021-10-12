CREATE TABLE cultura
(
	login_id INT NOT NULL,
	id INT NOT NULL auto_increment unique,
	cultura_name VARCHAR(128),
	aream2 INT NOT NULL,
	quantidade_pessoas INT NOT NULL,
	data_plantacao DATE NOT NULL,
	data_colheita DATE,
	quantitade_plantada INT NOT NULL,
	quantidade_colheita INT,
	defensivos_agricolas BOOLEAN, 
	PRIMARY KEY (id),
	FOREIGN KEY (login_id) REFERENCES login(id)
);


