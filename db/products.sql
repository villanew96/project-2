DROP DATABASE IF EXISTS storeProducts;

CREATE DATABASE storeProducts;

USE storeProducts;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name Varchar (255) NULL,
  picture VARCHAR (255) NOT NULL
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (name, price, quantity, picture, createdAt, updatedAt)
VALUES (" Dog Brush", 2.50, 100, "./Assets/img/icons/dogbrush.jpg",now(),now());

INSERT INTO products (name , price, quantity, picture, createdAt, updatedAt)
VALUES ("Kong", 3.10, 120, "./Assets/img/icons/kong.jpg",now(),now());

INSERT INTO products (name , price, quantity, picture, createdAt, updatedAt)
VALUES ("Bone", 3.25, 75, "./Assets/img/icons/hueso.jpg",now(),now());


INSERT INTO products (name , price, quantity, picture, createdAt, updatedAt)
VALUES ("Dog Food A", 20.00, 50,"./Assets/img/icons/dogFoodA.jpg",now(),now());

INSERT INTO products (name , price, quantity, picture, createdAt, updatedAt)
VALUES ("Collar", 20.00, 50, "./Assets/img/icons/Collar.jpg",now(),now());

INSERT INTO products (name , price, quantity, picture, createdAt, updatedAt)
VALUES ("Dog Food B", 20.00, 50, "./Assets/img/icons/dogFoodB.jpg",now(),now());

INSERT INTO products (name , price, quantity, picture, createdAt, updatedAt)
VALUES ("Ball", 20.00, 50, "./Assets/img/icons/ball.jpeg",now(),now());

INSERT INTO products (name , price, quantity, picture, createdAt, updatedAt)
VALUES ("Red Leash", 20.00, 50, "./Assets/img/icons/redLeash.jpg",now(),now());

INSERT INTO products (name , price, quantity, picture, createdAt, updatedAt)
VALUES ("Blue Leash", 20.00, 50, "./Assets/img/icons/blueLeash.jpg",now(),now());

INSERT INTO products (name , price, quantity, picture, createdAt, updatedAt)
VALUES ("Green Leash", 20.00, 50, "./Assets/img/icons/greenLeash.jpg",now(),now());

INSERT INTO products (name , price, quantity, picture, createdAt, updatedAt)
VALUES ("Dog plate", 20.00, 50, "./Assets/img/icons/dogPlate.jpg",now(),now());

INSERT INTO products (name , price, quantity, picture, createdAt, updatedAt)
VALUES ("Food container", 20.00, 50, "./Assets/img/icons/container.jpg",now(),now());

INSERT INTO products (name , price, quantity, picture, createdAt, updatedAt)
VALUES ("Puppy tug", 20.00, 50, "./Assets/img/icons/tug.jpg",now(),now());

INSERT INTO products (name , price, quantity, picture, createdAt, updatedAt)
VALUES ("Manga para morder ", 20.00, 50, "./Assets/img/icons/manga.jpg",now(),now());

INSERT INTO products (name , price, quantity, picture, createdAt, updatedAt)
VALUES ("Herm sprenger", 20.00, 50, "./Assets/img/icons/hermSprenger.jpg",now(),now());

INSERT INTO products (name , price, quantity, picture, createdAt, updatedAt)
VALUES ("Herm sprenger pikes", 20.00, 50, "./Assets/img/icons/hermSprengerSpikes.jpg",now(),now());










