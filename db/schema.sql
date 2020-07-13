DROP DATABASE IF EXISTS onlineStore_db;
CREATE database onlineStore_db;

USE onlineStore_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE carts (
    id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    products VARCHAR(255) NOT NULL,
    total_price INTEGER,
    PRIMARY KEY (id)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT,
    user_id INT NOT NULL,
    products VARCHAR(255) NOT NULL,
    total_price INTEGER,
    status VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

