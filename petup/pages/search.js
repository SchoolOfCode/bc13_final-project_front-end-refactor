import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../component/header/header";
//import { getAllUsers } from "../lib/search";
import { DisplayResults } from "../component/displayResults/displayResults";
import Footer from "../component/footer/footer";
import {getAllSitters} from '../lib/search.js'

//use getStaticProps or the getServerSideProps function for any Node.js module that is run on the server-side (not available in the browser)
//in getStaticProps, we call the function to get data
    //getStaticProps will get the data once at build time.
    //getServerSideProps is called at each request time

//'context' contains request specific paramters, like query parameters, etc.
export async function getServerSideProps(context){

//get the userInput from the query parameter
const userInput = (context.query.city)

//old code below for getting userInput from useRouter hook:
  // const router = useRouter();
  // const input = router.query.city;   //data came out as object like this data = {city: input}

 //testing to get all sitters without filter
 const sitterData = await getAllSitters(); // get all sitter data
 
 //the props that is being returned here will be passed as props in the component function 'Search', so the data can be rendered on the page. 
 return {
   props: {
     sitterData,
     userInput
   }
 };



  // //revive the code below for advanced search by city
  // const sitterData = await getSitterByCity(input); // get sitterData by City. 
  // return {
  //   props: {
  //     sitterData,
  //     input
  //   }
  // };

   
}



const Search = ({sitterData, userInput}) => {
  
console.log(sitterData)
console.log(`this is user input for city: ${userInput}`)

  //below is some old code from getting local data
  // function getData() {
  //   const response = getAllUsers(); //response is already parsed into JS object
  //   // const data = response.json() // no need to parse again. 
  //   return response;
  // }
  // const response = getData(); //fetch all data
  // const result = citySearch(response, input); //get user that matches city input

  

  return (
    <>
        <Head>
        <title>Profile</title>
      </Head>
       
      <Header />

      <div className="search-page-main-div">
        {/* comment out for now. .map has to be refactored for new data
        {result.map((user) => {
          return ( 
            <div className="card-div" key = {user.id}> 
              <DisplayResults id = {user.id} 
              name = {user.name} 
              nickname = {user.nickname}
               imageURL = {user.imageURL}
                tagline = {user.tagline} 
                address = {user.address} 
                phone = {user.phone}
                rate = {user.rate}/>
           </div>
          )
        })} */}
      </div>
      <Footer/>
    </>
    
  );
};

export default Search;


//refactor later to use dynamic routing?