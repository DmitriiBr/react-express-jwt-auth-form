CREATE TYPE roles AS ENUM ('USER', 'MANAGER', 'ADMIN');

CREATE TABLE USERS (
  _id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  user_roles roles ARRAY NOT NULL
);
