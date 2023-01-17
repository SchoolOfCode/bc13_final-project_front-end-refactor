//this script is for fetching external data into our app. 
//currently, data is stored locally. 

//we can eitherfetch exernal API database or query database directly. 

import { user } from '../db/sampledata' // this is old dummy data. will refactor to show newer data
import {query} from '../db/index' // import query function for writing SQL query

//the function in this folder will query to get data from database
//for now, the data {user} is stored locally and being imported in this file
export async function getAllSitters() {
    
    //const res = user; //'user' array is obtained from local sample data.

    const res = await query('SELECT * FROM users');
    // return res.json();
    return res.rows;
}

export async function getSitterByCity(city){
    //get sitter service by city. do direct sql query to database
    const response = [];//SQLquery here
    //example SQL queries
        //SELECT * 
        // FROM users 
        // INNER JOIN pet_service 
        // ON users.user_id = pet_service.sitter_id 
    // return response;
    // //should it be return response.json()?


    //logic for city search here. 
    const dummyData = []
    const dummyResponse = citySearch(dummyData, city)
    return dummyResponse
   
    //for loop function to find matching key for and returns an array of user object that matches key city
    //FIX THIS FUNCTION
    function citySearch(response, city) {
    let result = [];
    for (let i = 0; i < response.length; i++) {
      if (response[i].address.city == city) {
        result.push(response[i]);
      }
    }
    console.log(`this is results array: ${result}`);

    //!!!!!!12/1: props has changed. displayresults card needs to be updated with new prop data
    return result;
  }

//refactor this function to give data based on the filter below:
// 1. get all service by city(for utmost basic search, no filter)
// 2. get service by city and type of pets (1 filter)
// 3. get service by city, type of service, type of pet  (2 and 3 can be combined)
// 4. get service by city, type of service, type of pet, price range (min and max)
// 5. get service by city, type of service, type of pet, proce range, date of availability

}





//sample codes below to get data from database: 

//**** EXTERNAL API DATABASE */

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
// That means you can write code such as direct database queries without them being sent to browsers.




