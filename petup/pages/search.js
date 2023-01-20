import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../component/header/header";
import { DisplayResults } from "../component/displayResults/displayResults";
import Footer from "../component/footer/footer";
import {getSitterByData} from '../lib/search.js'
import dynamic from 'next/dynamic';


const Map = dynamic(
    () => import('../component/map/index.js'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
)

/* //use getStaticProps or the getServerSideProps function for any Node.js module that is run on the server-side (not available in the browser)
//in getStaticProps, we call the function to get data
    //getStaticProps will get the data once at build time.
    //getServerSideProps is called at each request time */

//'context' contains request specific parameters, like query parameters, etc.
export async function getServerSideProps(context){
//get the city from the query parameter
  const service = (context.query.service);
  const city = (context.query.city);
  const pet = (context.query.pet);
  const budget = (context.query.budget);
  // //old code below for getting city from useRouter hook:
  //   const router = useRouter();
  //   const input = router.query.city;   //data came out as object like this data = {city: input}

  //get the data
  const sitterData = await getSitterByData(service, city, pet, budget);
  
  //the props that is being returned here will be passed as props in the component function 'Search', so the data can be rendered on the page. 
  return {
    props: {
      sitterData,
    }
  };
}



const Search = ({sitterData}) => {
 /* 
 //console.log(sitterData)
//console.log(`this is user input for city: ${city}`)

  //below is some old code from getting local data
  // function getData() {
  //   const response = getAllUsers(); //response is already parsed into JS object
  //   // const data = response.json() // no need to parse again. 
  //   return response;
  // }
  // const response = getData(); //fetch all data
  // const result = citySearch(response, input); //get user that matches city input
  */   

  return (
    <>
        <Head>
        <title>Profile</title>
      </Head>
       
      <Header />

      <div className="search-page-main-div">
      {/* <p>this is user input for city: ${city}</p> */}
       
        {sitterData.map((user) => {
          return ( 
            <div className="card-div" key = {user.id}> 
              <DisplayResults
              fullname = {user.fullname}
              nickname = {user.nickname} 
              email = {user.email}
              phone_number = {user.phone_number}
              profile_image = {user.profile_image}
                tagline = {user.tagline} 
                address_region = {user.address_region}
                address_city = {user.address_city}
              price = {user.price}/>
           </div>
          )
        })}
        <Map />
      </div>
      <Footer/>
    </>
    
  );
};

export default Search;


//refactor later to use dynamic routing?  