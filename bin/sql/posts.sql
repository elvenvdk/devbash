
create table posts
(
  id serial primary key,
  username varchar references users(username),
  post_text varchar,
  avatar varchar
);

create table likes
(
  id serial primary key,
  username varchar references users(username),
  likes int
  []
);

  create table comments
  (
    id serial primary key,
    post_id int references posts(id),
    username varchar references users(username),
    comment_text text
    [],
  name varchar,
  avatar varchar,
  comment_date timestamp
);