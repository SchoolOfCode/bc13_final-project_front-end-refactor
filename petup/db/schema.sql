/*sample schema for our database. to be edited*/

CREATE TABLE users (
	user_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	fullname VARCHAR(30),
  nickname VARCHAR(15),
  email VARCHAR(30),
  created_at timestamp ,
  updated_at timestamp, 
  phone_number VARCHAR(15),
  profile_image VARCHAR(150),
  address_street TEXT,
  address_city VARCHAR (30),
  address_postcode VARCHAR (10),
  latitude float,
  longitude float
);

CREATE TABLE pet_service(
	service_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
	sitter_id INTEGER REFERENCES users(user_id),
  tagline VARCHAR(100),
  summary TEXT,
  pet_type VARCHAR(15),
  service_type VARCHAR(15),
  price INT,
  pubblished_at timestamp,
  created_at timestamp,
  updated_at timestamp,
  how_many_pets INT,
  pet_size VARCHAR(15)

  );
  
--   6 King Street
-- BLACKBURN
-- BB62 6VD
-- 24 West Street
-- TUNBRIDGE WELLS
-- TN71 7OW
-- 10 Church Street
-- DARLINGTON
-- DL90 1YW
-- 42 York Road
-- PLYMOUTH
-- PL77 1GB
-- 75 George Street
-- GLASGOW
-- G45 6AI
-- 40 Manchester Road
-- SALISBURY
-- SP91 0CP
-- 078 1460 0003 
-- 079 3436 2105 
-- 079 4946 1134 
-- 077 8288 2887 
-- 077 1773 6533 
-- 078 0339 5950 
-- 077 3126 7278 
-- 078 3310 8409 
-- 077 1944 1168 
-- 079 0953 8977 
-- 079 6704 7198 
-- 078 4091 2790 
-- 078 6800 9581 
-- 070 6659 3532 
-- 078 4514 7912 
-- 077 3024 3344 
-- 070 2562 2287 
-- 070 7799 2110 
-- 079 8224 0227 
-- 078 8147 9591

/*SAMPLE PLAYERS*/

INSERT INTO users (fullname,nickname, email,phone_number, profile_image,address_street, address_city, address_postcode, latitude, longitude )
VALUES 
(
      'Leanne Graham',
      'Lea',
      'Sincere@april.biz',
       '070 2562 2287',
       'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
       '6 King street',
       'BLACKBURN',
       'BB62 6VD',
       '',
       ''
),
(
      'Ervin Howell',
      'Erv',
      'Erving@april.biz',
       '078 4091 2790 ',
       'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
       '24 West Street',
       'Liverpool',
       'L7 6LJ',
       '',
       ''
),
(
  'player 3'
);


/* SAMPLE QUESTIONS*/

INSERT INTO questions (question)
VALUES
(
  'Imagine you are in a jungle and you have to choose one of these animals to fight to get to freedom - which one would you choose?'
),
(
  'Which is the most overrated?'
),
(
  'What is something you dont get the hype over?'
),
(
  'Pick a superpower - but there is a twist!'
),
(
'Who would you choose to fight alongside you in a zombie apocalypse?'
)
;

INSERT INTO multiple_choices (question_id, choices)
VALUES
(1, 'Gorilla'),
(1, 'Bear'),
(1, 'Worlf'),
(1, 'Venomous snake'),
(1, 'Rhino'),
(1, 'Kangaroo'),

(2, 'Social Media'),
(2, 'Dogs and Cats'),
(2, 'Chocolate'),
(2, 'Capital Cities'),
(2, 'Netflix'),
(2, 'Anime'),

(3, 'React'),
(3, 'JavaScript'),
(3, 'SQL'),
(3, 'Testing'),
(3, 'CSS'),
(3, 'UX/UI'),

(4, 'Invisibility but you smell like sewage'),
(4, 'Flying but you constantly need the loo'),
(4, 'Super strength but super sticky also'),
(4, 'X-ray vision but you lose your clothes when you use it'),
(4, 'Super stretchy but super slimy also'),
(4, 'Shape shifter but you only turn into bugs'),

(5, 'Liz'),
(5, 'Arshi'),
(5, 'Hamza'),
(5, 'Jordan'),
(5, 'Loz'),
(5, 'Jessica');

/*SAMPLE ANSWERS*/
INSERT INTO answers (player, question, choices)
VALUES 
(1,1,1),
(1,2,7),
(1,3,14),
(1,4,20),
(1,5,27),

(2,1,6),
(2,2,12),
(2,3,18),
(2,4,24),
(2,5,30),

(3,1,5),
(3,2,10),
(3,3,15),
(3,4,22),
(3,5,27)
