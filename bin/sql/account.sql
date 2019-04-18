create table account
(
  id serial primary key,
  username_hash char(64) unique,
  password_hash char(64),
  email varchar,
  session_id char(36) unique,
  date_joined timestamptz,
);

create table account_timelogs
(
  id serial primary key,
  username char(64) references account(username_hash),
  time_login timestamptz,
  time_logout timestamptz
)