create table users
(
  id primary key serial,
  first_name not null varchar,
  last_name not null varchar,
  username not null varchar,
  password not null varchar,
  avatar varchar,
  date timestamp
)

create table users_profile
(
  id primary key serial,
  user_id integer references users(id)
  bio varchar,
  skills not null text[],
  social_networks
)

create table users_education
(
  id primary key serial,
  user_id integer references users(id),
  school not null varchar,
  degree not null varchar,
  field_of_study not null string,
  from not null date
  to date
  current boolean
  description varchar
)

create table social_networks
(
  id primary key serial,
  user_id integer references users(id),
  youtube varchar,
  twitter varchar,
  facebook varchar,
  linkedin varchar,
  instagram varchar
)

create table experience
(
  id primary key serial,
  user_id integer references users(id),
  title not null varchar,
  company not null varchar,
  location varchar,
  from not null date,
  to date,
  current boolean,
  description varchar
)
