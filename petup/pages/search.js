import React from "react";
import Head from "next/head";
import Header from "../component/header/header";
import { DisplayResults } from "../component/displayResults/displayResults";
import Footer from "../component/footer/footer";
import {getSitterByData} from '../lib/search.js'
import dynamic from 'next/dynamic';
import Button from "../component/button/button";
import {useState} from 'react';
import Link from "next/link";


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
//get the input from the query parameter
  const service = (context.query.service);
  const city = (context.query.city);
  const pet = (context.query.pet);
  const budget = (context.query.budget);

  //get the data
  const sitterData = await getSitterByData(service, city, pet, budget);
 
  //the props that is being returned here will be passed as props in the component function 'Search', so the data can be rendered on the page. 
  console.log(sitterData)
  return {
    props: {
      sitterData,
    }
  };
}



const Search = ({sitterData}) => {

  // map component needs cetner coordinates to put on the mpa as an [0,0] data 
  // depending on which card is clicked, we need to update a state here with that users coordinates, by setting them
  // map will have those coordinates sent down and it will center whichever card is clicked
  const [coordinates, setCoordinates] = useState([sitterData[0]?.latitude, sitterData[0]?.longitude])

  function handleClick(lat, long) {
    setCoordinates([lat, long])
    console.log('You clicked me!')
  }
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>

      <Header />
      <div className="search-filter-navbar">
      <div className="navbar-container-search">

      <div className="navbar-input-fieald">
      <input
          name="input"
          className="search-input-field"
          placeholder="Search"
          type="text"
        />
      </div>
        
        
        <div className="search-pet-service">
          <select name="service" id="pets" className="search-toggle-box-service">
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
        <div className="navbar-button-div">
        <Button className="sign-up" text="Update"></Button>
        </div>
       
        </div>
      </div>
      
      <div className="search-page-main-div">
      <div className="white-main-div">

      
      <div className="search-result">       
        {sitterData.map((user) => {
          const price = Math.max(user.dog_walking_rate, user.pet_hosting_rate, user.house_sitting_rate)
          return (
            <div className="card-div" key={user.user_id}>
            <Link href={`/search/${user.user_id}`} style={{textDecoration: 'none', cursor:'pointer'}}>
              <DisplayResults
                fullname={user.fullname}
                nickname={user.nickname}
                email={user.email}
                phone_number={user.phone_number}
                profile_image={user.profile_image}
                tagline={user.tagline}
                address_region={user.address_region}
                address_city={user.address_city}
                price={price}
                handleClick={() => handleClick(user.latitude, user.longitude)}
              />
              </Link>
            </div>
          );
        })}</div>

        <div className="map-div">
          <Map sitterData={sitterData} coordinates={coordinates}/>
        </div>
        
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;

