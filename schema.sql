DROP DATABASE IF EXISTS textdb;

CREATE DATABASE textdb;

\connect textdb;

CREATE TABLE IF NOT EXISTS texts (
  id serial,
  phoneNumber text NOT NULL,
  message text NOT NULL,
  sendAt time NOT NULL,
  PRIMARY KEY (ID)
);
