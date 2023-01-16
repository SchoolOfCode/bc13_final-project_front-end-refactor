//this script is for fetching external data into our app. 
//currently, data is stored locally. 

//we can eitherfetch exernal API database or query database directly. 

import { user } from '../db/sampledata' // this is old dummy data. will refactor to show newer data


//the function in this folder will query to get data from database
//for now, the data {user} is stored locally and being imported in this file
export function getAllUsers() {
    
    const res = user;
    //to refactor to this: 
    //const res = await fetch('..');
    // return res.json();
    return res
}

function getSitterByCity(city){
    //get sitter service by city. do direct sql query to database
    const response = [];//SQLquery here
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

//16/1 - will update the function above
    //!!!!!!12/1: props has changed. displayresults card needs to be updated with new prop data

    //each user object is like this: 
    // {id: 1,
    // name: "Leanne Graham",
    // nickname: "Leanne",
    // imageURL : "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000",
    // tagline: "I am a pet carer",
    // address: {
    //   street: "Kulas Light",
    //   city: "London",
    //   postcode: "WN5 9FT",
    // },
    // phone: "1-770-736-8031 x56442",
    // rate : "35"}

    return result;
  }


}

function getSitterByCityServicePets(){
    //get service by city and type of pets (1 filter)
    // 3. get service by city, type of service, type of pet 
}


export {getSitterByCity,
    getSitterByCityServicePets}

//todo 16.1 : 
//set up a function that gives data based on the filter below:
//thefunctions that we need (for filter): 
// 1. get all service by city(for utmost basic search, no filter)
// 2. get service by city and type of pets (1 filter)
// 3. get service by city, type of service, type of pet  (2 and 3 can be combined)
// 4. get service by city, type of service, type of pet, price range (min and max)
// 5. get service by city, type of service, type of pet, proce range, date of availability

//sample codes to get data from database below: 

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




