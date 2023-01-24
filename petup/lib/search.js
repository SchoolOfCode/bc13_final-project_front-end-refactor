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

export async function getSitterByData(city, dog_walking, house_sitting, pet_hosting, budget, dog, cat, other){
  //get sitter service by city. do direct sql query to database
  const response = await query(`  
  SELECT * from users
    WHERE sitting_services_enabled IS true 
    AND LOWER (address_city) LIKE LOWER($1)
    AND dog_walking IS ($2)
    AND house_sitting IS ($3)
    AND pet_hosting IS ($4)
    AND pet_hosting_rate < ($5)
    AND house_sitting_rate < ($5)
    AND dog_walking_rate < ($5)
    AND pet_dog IS ($6)
    AND pet_cat IS ($7)
    AND pet_other IS ($8)`, [city, dog_walking, house_sitting, pet_hosting, budget, dog, cat, other]) 

  return response.rows;
  //search is case insensitive 
  //refactor later to use wildcard expression '%'

}


// export async function getSitterByData(service, city, pet, budget){
//     //get sitter service by city. do direct sql query to database
//     const response = await query(`  
//     SELECT * 
//     FROM users 
//     INNER JOIN pet_service 
//     ON users.user_id = pet_service.sitter_id 
//     WHERE LOWER(address_city) LIKE LOWER($1)
//     AND LOWER(service_type) LIKE LOWER($2)
//     AND LOWER(pet_type) LIKE LOWER($3)
//     AND (price) < ($4)`, [city, service, pet, budget])

//     return response.rows;
//     //search is case insensitive 
//     //refactor later to use wildcard expression '%'

//   }

  //for dog walking service 
  export async function getSitterByDogWalking(city, budget){
    const response = await query(`
    SELECT * from users
    WHERE sitting_services_enabled IS true 
    AND LOWER (address_city) LIKE LOWER($1)
    AND dog_walking IS true
    AND pet_dog IS true
    AND dog_walking_rate < ($2)`, [city, budget]) 
    
    return response.rows;

  }

  // for house sitting service 
  export async function getSitterByHouseSitting(city, budget){
    const response = await query(`
    SELECT * from users
    WHERE sitting_services_enabled IS true 
    AND LOWER (address_city) LIKE LOWER($1)
    AND house_sitting IS true
    AND pet_dog IS true
    AND dog_walking_rate < ($2)`, [city, budget]) 
    
    return response.rows;

  }


  // for pet hosting service 
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




