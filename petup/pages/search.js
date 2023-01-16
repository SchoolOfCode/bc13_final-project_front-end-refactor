import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../component/header/header";
import { getAllUsers } from "../lib/search";
import { DisplayResults } from "../component/displayResults/displayResults";
import Footer from "../component/footer/footer";


//16.1 : will need to use getStaticProps or the server side render Props function.
//use dynamic routing
//getStaticProps will get the data once on mount?
export async function getStaticProps(){
   //in getStaticProps, we call the function to get data, which
  //has been defined in the lib folder (that fetch data from local database)

  //using this hook to get data from previous page
  const router = useRouter();
  const data = router.query;   //data came out as object like this data = {city: input}
  
  //get the city state
  const input = data.city;

 
  const sitterData = await getSitterByCity(input); // get sitterData by City. 
  return {
    props: {
      sitterData,
    },
    //the props that is being returned here will be passed as props
    //in the component function 'Search', so the data can be rendered the data on the page. 

  };

}


const Search = ({sitterData}) => {
  

  function getData() {
    const response = getAllUsers(); //response is already parsed into JS object
    // const data = response.json() // no need to parse again. 
    return response;
  }
  
  const response = getData(); //fetch all data
  const result = citySearch(response, input); //get user that matches city input

  

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
