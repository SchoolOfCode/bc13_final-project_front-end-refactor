/*sample schema for our database. to be edited*/
/*I corrected a few errors in these schema. I have checked that works in dbFiddle */

CREATE TABLE users (
      user_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      fullname VARCHAR(30),
      nickname VARCHAR(15),
      email VARCHAR(30),
      phone_number VARCHAR(30),
      profile_image TEXT,
      address_region TEXT,
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
      price FLOAT,
      how_many_pets INT,
      pet_size VARCHAR(15)
      );

  

INSERT INTO users (fullname,
                  nickname, 
                  email,
                  phone_number, 
                  profile_image,
                  address_region, 
                  address_city, 
                  address_postcode, 
                  latitude, 
                  longitude )
VALUES 
(
      'Leanne Graham',
      'Lea',
      'Sincere@april.biz',
       '070 2562 2287',
       'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
       'King street',
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

INSERT INTO pet_service (sitter_id, 
                        tagline, 
                        summary, 
                        pet_type, 
                        service_type, 
                        price, 
                        how_many_pets, 
                        pet_size)
VALUES
(
        1,
        'I am a pet owner!',
        'I love all animals and want to take care of them all!',
        'Dog',
        'walking',
         15,
         5,
        'Big'
),
(
        2,
        'I do not own a pet',
        'I love dogs',
        'Dog',
        'house sitting',
         5,
         2,
        'small'
);


