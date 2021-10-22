CREATE TABLE agricultor 
(
	agricultor_id INT NOT NULL auto_increment,
	nome VARCHAR(40) NOT NULL,
	email VARCHAR(100) NOT NULL,
  senha VARCHAR(20) NOT NULL,
  PRIMARY KEY (agricultor_id)
);
CREATE TABLE cultura
(
	agricultor_id INT NOT NULL,
  cultura_id INT NOT NULL auto_increment,
  cultura_nome VARCHAR(40),
	area_plantacao INT NOT NULL,
	quantidade_mao_de_obra INT NOT NULL,
	data_plantacao DATE NOT NULL,
  data_colheita DATE,
	quantitade_plantada INT NOT NULL,
  quantidade_colheita INT,
  defensivos_agricolas BOOLEAN, 
  PRIMARY KEY (cultura_id),
  FOREIGN KEY (agricultor_id) REFERENCES agricultor(agricultor_id)
);
CREATE TABLE `agricultor` (
  `agricultor_id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`agricultor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `cultura` (
  `agricultor_id` INT NOT NULL,
  `cultura_id` INT NOT NULL auto_increment,
  `cultura_nome` VARCHAR(40),
	`area_plantacao` INT NOT NULL,
	`quantidade_mao_de_obra` INT NOT NULL,
	`data_plantacao` DATE NOT NULL,
  `data_colheita` DATE,
	`quantitade_plantada` INT NOT NULL,
  `quantidade_colheita` INT,
  `defensivos_agricolas` BOOLEAN, 
  PRIMARY KEY (`cultura_id`),
  KEY (`agricultor_id`) REFERENCES `agricultor`(`agricultor_i`)
  CONSTRAINT `cultura_ibfk_1` FOREIGN KEY (`agricultor_id`) REFERENCES `agricultor` (`agricultor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
