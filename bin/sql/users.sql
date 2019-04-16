
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
  skills text
  [],
  github_username varchar
  );

  create table users_education
  (
    id serial primary key,
    username varchar references users(username),
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
    current_job boolean,
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

  insert into users_profile
    (
    username, user_city, user_state, bio, skills, github_username
    )
  values
    (
      'cboone54', 'Detroit', 'Mi', 'I am a cool guy', '{c++, JavaScript}', 'elvenvdk'
  );

  insert into users_education
    (
    username, school, degree, field_of_study, from_date, to_date, current_school, edu_description
    )
  values
    (
      'cboone54', 'New England College', 'BA', 'Business Information Systems', '1/2/2008', '6/15/2017', 'false', 'This is a great school in New Hampshire'
  );

  insert into users_social_networks
    (
    username, twitter, facebook, linkedin, instagram
    )
  values
    (
      'cboone54', 'boonyBaby111', 'boonyBaby111', 'Chike Igboby', 'cboon__codepics'
  );
