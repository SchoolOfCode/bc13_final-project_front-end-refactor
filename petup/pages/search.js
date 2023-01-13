import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../component/header/header";
import { getAllUsers } from "../lib/search";
import { DisplayResults } from "../component/displayResults/displayResults";
import Footer from "../component/footer/footer";

const Search = () => {
  //using this hook to get data from previous page
  const router = useRouter();
  const data = router.query;   //data came out as object like this data = {city: input}
  
  //get the city state
  const input = data.city;

  function getData() {
    const response = getAllUsers(); //response is already parsed into JS object
    // const data = response.json() // no need to parse again. 
    return response;
  }
  
  const response = getData(); //fetch all data
  const result = citySearch(response, input); //get user that matches city input

  //for loop function to find matching key for and returns an array of user object that matches key city
  function citySearch(response, input) {
    let result = [];
    for (let i = 0; i < response.length; i++) {
      if (response[i].address.city == input) {
        result.push(response[i]);
      }
    }
    console.log(`this is results array: ${result}`);

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

  return (
    <>
        <Head>
        <title>Profile</title>
      </Head>
       
      <Header />

      <div className="search-page-main-div">
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
        })}
      </div>
      <Footer/>
    </>
    
  );
};

export default Search;


//refactor to add getStaticPaths or getStaticProps
//export getStaticPaths function to return a list (fetched data from db) 
///export getStaticProps to fetch required data to render this dynamic page
