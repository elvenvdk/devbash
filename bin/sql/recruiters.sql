create table recruiters
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

create table recruiters_profile
(
  id serial primary key,
  recruiter_id integer references recruiters(id),
  username varchar,
  foreign key (username) references recruiters(username),
  user_city varchar,
  user_state varchar,
  bio varchar,
  company varchar,
  company_email varchar
);

create table recruiter_stack
(
  id serial primary key,
  recruiter_id integer,
  foreign key (recruiter_id) references recruiters(id),
  username varchar,
  foreign key (username) references recruiters(username),
  roles text[], 
  languages text[],
  frameworks text[]
);

create table recruiters_companies
(
  id serial primary key,
  recruiter_id integer references recruiters(id),
  username varchar references recruiters(username),
  size varchar,
  company_type varchar
);

create table recruiters_ratings
(
  id serial primary key,
  recruiter_id integer references recruiters(id),
  username varchar references recruiters(username),
  rating integer,
  likes integer
);

insert into recruiters
(
  first_name,
  last_name,
  username,
  user_password,
  user_password2
)
values
(
  'Ryan',
  'Seecrest',
  'rybusta',
  'rseecrest@email.com',
  'password1234'
),
(
  'John',
  'Stamos',
  'jayboogie007',
  'gs@email.com',
  'password1234'
);




