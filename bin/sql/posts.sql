
create table posts
(
  id serial primary key,
  username varchar(64) references account(username_hash),
  post_text varchar,
  avatar varchar
);

create table likes
(
  id serial primary key,
  username varchar(64) references account(username_hash),
  likes int
  []
);

  create table comments
  (
    id serial primary key,
    post_id int references posts(id),
    username varchar(64) references account(username_hash),
    comment_text text
    [],
  name varchar,
  avatar varchar,
  comment_date timestamp
);