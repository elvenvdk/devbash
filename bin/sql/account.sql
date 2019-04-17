create table account
(
  id serial primary key,
  username_hash char(64),
  password_hash char(64)
);