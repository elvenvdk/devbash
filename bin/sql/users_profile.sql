
create table users_profile
(
  id serial primary key,
  username varchar(64) references account(username_hash),
  avatar varchar,
  first_name varchar,
  last_name varchar,
  user_city varchar,
  user_state varchar,
  bio varchar,
  skills text
  [],
  github_username varchar
  );

  create table users_education
  (
    id serial primary key,
    username varchar(64) references account(username_hash),
    school varchar,
    degree varchar,
    field_of_study varchar,
    from_date date,
    to_date date,
    current_school boolean,
    edu_description varchar
  );

  create table users_social_networks
  (
    id serial primary key,
    username varchar(64) references account(username_hash),
    youtube varchar,
    twitter varchar,
    facebook varchar,
    linkedin varchar,
    instagram varchar
  );

  create table users_experience
  (
    id serial primary key,
    username varchar(64) references account(username_hash),
    title varchar,
    company varchar,
    company_location varchar,
    from_date date,
    to_date date,
    current_job boolean,
    description varchar
  );

  create table users_cv
  (
    id serial primary key,
    username varchar(64) references account(username_hash),
    title varchar,
    cv varchar
  );

