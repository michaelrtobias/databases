-- CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  room_id int NOT NULL,
  room_name VARCHAR(20),
  PRIMARY KEY (room_id)
);

CREATE TABLE messages (
  id int NOT NULL,
  chat_content VARCHAR(20),
  person_id VARCHAR(20),
  room_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (room_id) REFERENCES rooms(room_id)
);

/* Create other tables and define schemas for them here! */





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

