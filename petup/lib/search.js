//this script is for fetching external data into our app. 
//either fetch exernal API database or query database directly. 

import {query} from '../db/index' // import query function for writing SQL query


//the function in this folder will query to get data from database
export async function getAllSitters() {
    
    const res = await query('SELECT * FROM users');
    // return res.json();
    return res.rows;
}

export async function getSitterByData(service, city, petType, budget){
  // find which service_rate to compare the budget to
  let serviceRate = '';
  if (service === 'pet_hosting') {
    serviceRate = 'pet_hosting_rate';
  } else if (service === 'house_sitting') {
    serviceRate = 'house_sitting_rate';
  } else {
    serviceRate = 'dog_walking_rate';
  };
  const response = await query(`SELECT * 
    FROM users 
    WHERE LOWER(address_city) LIKE LOWER($1)
    AND ${service} IS TRUE
    AND sitting_services_enabled IS TRUE
    AND ${petType} IS TRUE
    AND ${serviceRate} <= ($2)`, [city, budget])
  //service, petType, serviceRate, 
    return response.rows;
    //search is case insensitive 
    //refactor later to use wildcard expression '%
}

export async function setUserData(fullname,
  nickname,
  email,
  phone_number,
  tagline,
  profile_image,
  address_region,
  address_city,
  address_postcode,
  latitude,
  longitude,
  sitting_services_enabled,
dog_walking,
house_sitting,
pet_hosting,
pet_hosting_rate,
house_sitting_rate,
dog_walking_rate,
pet_dog,
pet_cat,
pet_other) {
  // run the check if exists request
  const isExistingUser = await query(
    'SELECT 1 FROM users WHERE email = $1', [email]);
  // if exists update the users details
  if (isExistingUser === 1) {
    // UPDATE - also takes every bit of info from the form BUT email and profile image
    const updatedUser = await query(`UPDATE users SET 
    fullname = $1,
    nickname = $2,
    email = $3,
    phone_number = $4,
    tagline = $5,
    profile_image = $6,
    address_region = $7,
    address_city = $8,
    address_postcode = $9,
    latitude = $10,
    longitude = $11,
    sitting_services_enabled = $12,
dog_walking = $13,
house_sitting = $14,
pet_hosting = $15,
pet_hosting_rate = $16,
house_sitting_rate = $17,
dog_walking_rate = $18,
pet_dog = $19,
pet_cat = $20,
pet_other = $21
      RETURNING *`, [
        fullname,
        nickname,
        email,
        phone_number,
        tagline,
        profile_image,
        address_region,
        address_city,
        address_postcode,
        latitude,
        longitude,
        sitting_services_enabled,
  dog_walking,
  house_sitting,
  pet_hosting,
  pet_hosting_rate,
  house_sitting_rate,
  dog_walking_rate,
  pet_dog,
  pet_cat,
  pet_other
      ])

      return updatedUser.rows[0];
  } else {
    const createdUser = await query(`INSERT INTO users (fullname,
      nickname,
      email,
      phone_number,
      tagline,
      profile_image,
      address_region,
      address_city,
      address_postcode,
      latitude,
      longitude,
      sitting_services_enabled,
dog_walking,
house_sitting,
pet_hosting,
pet_hosting_rate,
house_sitting_rate,
dog_walking_rate,
pet_dog,
pet_cat,
pet_other)
      VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21
      )
      RETURNING *;`, [
        fullname,
        nickname,
        email,
        phone_number,
        tagline,
        profile_image,
        address_region,
        address_city,
        address_postcode,
        latitude,
        longitude,
        sitting_services_enabled,
  dog_walking,
  house_sitting,
  pet_hosting,
  pet_hosting_rate,
  house_sitting_rate,
  dog_walking_rate,
  pet_dog,
  pet_cat,
  pet_other
      ])

      return createdUser.rows[0];
  }
}

export async function checkUserExists(email) {
  if (email === null || undefined) {
    return false;
  }
  const isExistingUser = await query(
    'SELECT 1 FROM users WHERE email = $1', [email]);
  
  if (isExistingUser === 1) {
    return true;
  } else {
    return false;
  }
}

export async function getUserData(email) {
  const userData = await query(
    `SELECT * FROM users WHERE email = $1`, [email]
  )

  return response.rows;
}

export async function getAllSitterID(){
 
  const response = await query(`SELECT * from users`) 
  const arrayID = response.rows;
  
  return arrayID.map((user) => {
    return {
      params: {
        id: String(user.user_id),
      },
    };
  });

}

export async function getSitterbyID(ID){
  const response = await query (`SELECT * from users
  WHERE user_id = $1`, [ID])

  return response.rows;
}







//sample codes below to get data from database: 

/* //**** EXTERNAL API DATABASE */

//Note: Next.js polyfills fetch() on both the client and server. You don't need to import it.

//***example 1: get all data */
// export async function getData() {
//     // Instead of the file system,
//     // fetch post data from an external API endpoint
//     const res = await fetch('..');
//     return res.json();
//   }

//*** example 2:  getDataByIds to fetch an API endpoint*/
// export async function getAllPostIds() {
//   // Instead of the file system,
//   // fetch post data from an external API endpoint
//   const res = await fetch('..');
//   const posts = await res.json();
//   return posts.map((post) => {
//     return {
//       params: {
//         id: post.id,
//       },
//     };
//   });
// }




//*** QUERY DATABASE DIRECTLY */
//depends on the database of choice, import its SDK
//import someDatabaseSDK from 'someDatabaseSDK'  

// const databaseClient = someDatabaseSDK.createClient(...)

// export async function getData() {
//   // Instead of the file system,
//   // fetch post data from a database. inject SQL query
//   return databaseClient.query('SELECT posts...')
// }

// This is possible because getStaticProps only runs on the server-side.
// It will never run on the client-side. It won???t even be included in the JS bundle for the browser. 
// That means you can write code such as direct database queries without them being sent to browsers. */




