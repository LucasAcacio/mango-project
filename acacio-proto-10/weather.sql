CREATE table weather
(
	city VARCHAR(128) NOT NULL,
    weather VARCHAR(128) NOT NULL,
    temp_min float NOT NULL,
    temp_max float NOT NULL,
    humidity INT NOT NULL,
    data DATE NOT NULL,
    PRIMARY KEY (city)
);