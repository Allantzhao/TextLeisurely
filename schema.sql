DROP DATABASE IF EXISTS test;

CREATE DATABASE test;

\connect test;

CREATE TABLE IF NOT EXISTS items (
  id serial,
  quantity int NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);
