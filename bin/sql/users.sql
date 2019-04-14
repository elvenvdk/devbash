create table users
(
  id serial primary key,
  first_name varchar,
  last_name varchar,
  email varchar,
  username varchar unique,
  user_password varchar,
  user_password2 varchar,
  avatar varchar,
  date_joined timestamp
);

create table users_profile
(
  id serial primary key,
  user_id integer references users(id),
  username varchar references users(username),
  user_city varchar,
  user_state varchar,
  bio varchar,
  skills text[],
  github_username varchar
);

create table users_education
(
  id serial primary key,
  user_id integer references users(id),
  username varchar references users(username),
  school varchar,
  degree varchar,
  field_of_study varchar,
  from_date date,
  to_date date,
  current boolean,
  edu_description varchar
);

create table users_social_networks
(
  id serial primary key,
  user_id integer references users(id),
  username varchar references users(username),
  youtube varchar,
  twitter varchar,
  facebook varchar,
  linkedin varchar,
  instagram varchar
);

create table users_experience
(
  id serial primary key,
  user_id integer references users(id),
  username varchar references users(username),
  title varchar,
  company varchar,
  company_location varchar,
  from_date date,
  to_date date,
  current boolean,
  description varchar
);

create table users_cv
(
  id serial primary key,
  user_id integer references users(id),
  username varchar references users(username),
  title varchar,
  cv varchar
);

insert into users
(
  first_name,
  last_name,
  email,
  username,
  user_password,
  user_password2
)
values
(
  'Alvin',
  'van der Kuech',
  'vdk@email.com',
  'elvenvdk',
  'password1234',
  'password1234'
),
(
  'Chike',
  'Igbobi',
  'ci@email.com',
  'cboone54',
  'password1234',
  'password1234'
);
