DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary FLOAT NOT NULL,
  department_id INT,
--   PRIMARY KEY (id)
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL

);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
--   PRIMARY KEY (id)
  FOREIGN KEY (role_id)
  REFERENCES role(id)
--   FOREIGN KEY (manager_id)
--   REFERENCES employee(id)
  ON DELETE SET NULL
);