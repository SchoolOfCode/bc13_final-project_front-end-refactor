//this script is for fetching external data into our app. 
//either fetch exernal API database or query database directly. 

import { user } from '../db/sampledata' // this is old dummy data. will refactor to show newer data
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
    AND LOWER($2) IS TRUE
    AND sitting_services_enabled IS TRUE
    AND LOWER($3) IS TRUE
    AND ($4) <= ($5)`, [city, service, petType, serviceRate, budget])

    return response.rows;
    //search is case insensitive 
    //refactor later to use wildcard expression '%
}

export async function setUserData(fullname, nickname, email, phoneNumber, profileImage, tagline, addressRegion, addressCity, addressPostcode, latitude, longitude, sittingServicesEnabled, dogWalking, houseSitting, petHosting, petHostingRate, houseSittingRate, dogWalkingRate, petDog, petCat, petOther) {
  // run the check if exists request
  const isExistingUser = await query(
    'SELECT 1 FROM users WHERE email = $1', [email]);
  // if exists update the users details
  if (isExistingUser === 1) {
    // UPDATE - also takes every bit of info from the form BUT email and profile image
    const updatedUser = await query(`UPDATE users SET 
      fullname = $1, 
      nickname = $2, 
      phone_number = $3, 
      tagline = $4,
      address_region = $5, 
      address_city = $6, 
      address_postcode = $7, 
      latitude = $8, 
      longitude = $9,
      sitting_services_enabled = $10,
      dog_walking = $11,
      house_sitting = $12,
      pet_hosting = $13,
      pet_hosting_rate = $14,
      house_sitting_rate = $15,
      dog_walking_rate = $16,
      pet_dog = $17,
      pet_cat = $18,
      pet_other = $19) 
      WHERE email = $20`, [
        fullname, 
        nickname, 
        phoneNumber, 
        tagline,
        addressRegion, 
        addressCity, 
        addressPostcode, 
        latitude, 
        longitude,
        sittingServicesEnabled,
        dogWalking,
        houseSitting,
        petHosting,
        petHostingRate,
        houseSittingRate,
        dogWalkingRate,
        petDog,
        petCat,
        petOther,
        email
      ])
  } else {
    const createdUser = await query(`INSERT INTO users 
      (fullname, 
      nickname, 
      email,
      phone_number, 
      profile_image,
      tagline,
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
      );`, [
        fullname, 
        nickname, 
        email,
        phoneNumber, 
        profileImage,
        tagline,
        addressRegion, 
        addressCity, 
        addressPostcode, 
        latitude, 
        longitude,
        sittingServicesEnabled,
        dogWalking,
        houseSitting,
        petHosting,
        petHostingRate,
        houseSittingRate,
        dogWalkingRate,
        petDog,
        petCat,
        petOther
      ])
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
//refactor this function to give data based on the filter below:
// 1. get all service by city(for utmost basic search, no filter)
// 2. get service by city and type of pets (1 filter)
// 3. get service by city, type of service, type of pet  (2 and 3 can be combined)
// 4. get service by city, type of service, type of pet, price range (min and max)
// 5. get service by city, type of service, type of pet, proce range, date of availability






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
// It will never run on the client-side. It won’t even be included in the JS bundle for the browser. 
// That means you can write code such as direct database queries without them being sent to browsers. */




