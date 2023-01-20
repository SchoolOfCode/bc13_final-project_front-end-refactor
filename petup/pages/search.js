import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../component/header/header";
import { DisplayResults } from "../component/displayResults/displayResults";
import Footer from "../component/footer/footer";
import {getSitterByCity} from '../lib/search.js'
import dynamic from 'next/dynamic';
import Button from "../component/button/button";


const Map = dynamic(
    () => import('../component/map/index.js'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
)


//use getStaticProps or the getServerSideProps function for any Node.js module that is run on the server-side (not available in the browser)
//in getStaticProps, we call the function to get data
    //getStaticProps will get the data once at build time.
    //getServerSideProps is called at each request time

//'context' contains request specific parameters, like query parameters, etc.
export async function getServerSideProps(context){

//get the userInput from the query parameter
const userInput = (context.query.city)

// //old code below for getting userInput from useRouter hook:
//   const router = useRouter();
//   const input = router.query.city;   //data came out as object like this data = {city: input}

 //get the data
 const sitterData = await getSitterByCity(userInput);
 
 //the props that is being returned here will be passed as props in the component function 'Search', so the data can be rendered on the page. 
 return {
   props: {
     sitterData,
     userInput
   }
 };

   
}



const Search = ({sitterData, userInput}) => {
  
//console.log(sitterData)
//console.log(`this is user input for city: ${userInput}`)

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
      <div className="search-filter-navbar">
        <input
          name="input"
          className="search-input-field"
          placeholder="Search"
          type="text"
        />
        
        <div className="search-pet-service">
          <select name="service" id="pets" className="toggle-box-service">
            <option value="Pet hosting">Pet Hosting</option>
            <option value="home sitting">Home Sitting</option>
            <option value="home sitting">Dog Walking</option>
          </select>
        </div>
        <div className="pet-type">
          <select name="type" id="pet-type" className="toggle-box-type-pet">
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <Button className="sign-up" text="Update"></Button>
      </div>

      <div className="search-page-main-div">
      <div className="search-result">
        {/* <p>this is user input for city: ${userInput}</p> */}

        {sitterData.map((user) => {
          return (
            <div className="card-div" key={user.id}>
              <DisplayResults
                fullname={user.fullname}
                nickname={user.nickname}
                email={user.email}
                phone_number={user.phone_number}
                profile_image={user.profile_image}
                tagline={user.tagline}
                address_region={user.address_region}
                address_city={user.address_city}
                price={user.price}
              />
            </div>
          );
        })}</div>
        <div className="map-div"><Map /></div>
        
      </div>
      <Footer />
    </>
  );
};

export default Search;


//refactor later to use dynamic routing?  