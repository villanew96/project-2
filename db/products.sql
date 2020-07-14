DROP DATABASE IF EXISTS storeProducts;

CREATE DATABASE storeProducts;

USE storeProducts;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name Varchar (255) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (name, price, quantity)
VALUES (" Dog Brush", 2.50, 100);

INSERT INTO products (name , price, quantity)
VALUES ("Kong", 3.10, 120);

INSERT INTO products (name , price, quantity)
VALUES ("Bone", 3.25, 75);


INSERT INTO products (name , price, quantity)
VALUES ("Dog Food A", 20.00, 50)

INSERT INTO products (name , price, quantity)
VALUES ("Collar", 20.00, 50)

INSERT INTO products (name , price, quantity)
VALUES ("Dog Food B", 20.00, 50)

INSERT INTO products (name , price, quantity)
VALUES ("Ball", 20.00, 50)

INSERT INTO products (name , price, quantity)
VALUES ("Red Leash", 20.00, 50)

INSERT INTO products (name , price, quantity)
VALUES ("Blue Leash", 20.00, 50)

INSERT INTO products (name , price, quantity)
VALUES ("Green Leash", 20.00, 50)

INSERT INTO products (name , price, quantity)
VALUES ("Dog plate", 20.00, 50)

INSERT INTO products (name , price, quantity)
VALUES ("Food container", 20.00, 50)

INSERT INTO products (name , price, quantity)
VALUES ("Puppy tug", 20.00, 50)

INSERT INTO products (name , price, quantity)
VALUES ("Manga para morder ", 20.00, 50)

INSERT INTO products (name , price, quantity)
VALUES ("Herm sprenger", 20.00, 50)

INSERT INTO products (name , price, quantity)
VALUES ("Herm sprnger pikes", 20.00, 50)










