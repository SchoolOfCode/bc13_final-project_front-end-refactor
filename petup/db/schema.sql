/*sample schema for our database. to be edited*/

CREATE TABLE users (
	user_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	fullname VARCHAR(30),
  nickname VARCHAR(15),
  email VARCHAR(30),
  created_at timestamp ,
  updated_at timestamp, 
  phone_number VARCHAR(15),
  profile_image TEXT,
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
  -- fake addresses 

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

--fake numbers 

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
       0.00,
       0.00
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
       0.00,
       0.00
);


/* SAMPLE QUESTIONS*/

INSERT INTO pet_service (tagline, summary, pet_type, service_type, price, how_many_pets, pet_size)
VALUES
(
        'I am a pet owner!',
        'I love all animals and want to take care of them all!',
        'Dog',
        'walking',
         15,
         5,
        'Big'
),
(
        'I do not own a pet',
        'I love dogs',
        'Dog',
        'house sitting',
         5,
         2,
        'small'
);


