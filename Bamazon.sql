DROP DATABASE IF EXISTS Bamazon;
CREATE DATABASE Bamazon;
USE Bamazon;

 -- create a table called 'products' which will contain inventory --
 
 CREATE TABLE products (
 item_id INT (10) AUTO_INCREMENT NOT NULL,
 product_name VARCHAR (20) NOT NULL,
 department_name VARCHAR(10) NOT NULL,
 price INT (10) NOT NULL,
 stock_quantity INT (6) NOT NULL,
 PRIMARY KEY (item_id)
 );
 
 
 INSERT INTO products (product_name, department_name, price, stock_quantity)
 VALUES 
 ('Strawberries/lb', 'Fruit', 10.00, 100), 
 ('Watermelon', 'Fruit', 6.50, 50), 
 ('Mango', 'Fruit', 2.00, 75), 
 ('Banana/bunch', 'Fruit', 1.25, 90), 
 ('Avocado', 'Fruit', 1.50, 45),
 ('Celery', 'Vegtables', 3.00, 30),
 ('Onion', 'Vegetables', 2.00, 110), 
 ('Spinach', 'Vegetables', 2.00, 45), 
 ('Casava', 'Vegetables', 3.00, 20), 
 ('Chili/lb', 'Vegetables', 5.00, 20),
 ('Pinto Beans/lb', 'Beans', 3.00, 50), 
 ('Navy Beans/lb', 'Beans', 4.00, 25), 
 ('Mung Beans/lb', 'Beans', 2.00, 50), 
 ('Black Beans/lb', 'Beans', 3.00, 75), 
 ('Garbanzo Beans/lb', 'Beans', 3.00, 30),
 ('Rice/lb', 'Grains', 2.99, 200), 
 ('Barley/lb', 'Grains', 3.00, 100), 
 ('Hops/lb', 'Grains', 8.00, 50), 
 ('Oatmeal/lb', 'Grains', 4.00, 50), 
 ('Millet/lb', 'Grains', 2.00, 20),
 ('Quinoa/lb', 'Grains', 6.00, 100), 
 ('Sesame/lb', 'Seeds', 4.00, 50), 
 ('Hemp Seeds', 'Seeds', 5.00, 50),
 ('Poppy Seeds', 'Seeds', 3.00, 25), 
 ('Pumpkin Seeds', 'Seeds', 3.00, 25)
 