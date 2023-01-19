import Link from "next/link";
import Header from "../component/header/header";
import Head from "next/head";
import Button from "../component/button/button";
import { useState } from "react";
import Footer from "../component/footer/footer";

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'
// import Calendar from 'react-calendar';
import Calendar from "../component/calendar/calendar";
import Example from "../component/numberInput/input";
import Radio from "../component/radioButtons/radio";

// we need to track the states of different inputs
// we can either usestates or useReducer

// how we set min and max value for price?


export default function Home() {
  const [city, setCity] = useState("");
  const [service, setService] = useState(1);
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(70)
  const [pet, setPet] = useState(2)
  const [startDate, setStartDate] = useState("")
  const [endData, setEndDate] = useState("")
  const [priceString, setPriceString] = useState('(per night)');

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  /**
   * 
   * Takes in a value which is an int. Values correspond to these values in the database:
   * 1 = 'Pet Hosting', 2 = 'Home Sitting', 3 = 'Dog Walking'
   */
  function handleServiceChange(e) {
    // if service is set to dog walking, then pet will also be set to Dog
    if (e.target.value === 3) {
      setPet(2)
    }
    setService(e.target.value);
  }

  /**
   * 
   * Takes in a value which is an int. Values correspond to these values in the database:
   * 1 = 'Cat', 2 = 'Dog', 3 = 'Others'
   */
  function handlePetChange(e) {
    setPet(e.target.value);
    console.log('pet', pet)
  }

  function handleMinPriceChange(e) {
    setMinPrice(e.target.value);
  }

  function handleMaxPriceChange(e) {
    setMaxPrice(e.target.value);
  }

  function handleClick() {
    console.log(city);
  }

  return (
    <>
      {" "}
      <Head>
        <title>Home</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Header />
      <div className="main-div">
        <div className="searchBox-div">
          <div className="top-search-div">
            <div className="pet-service">
              <label for="service">What service would you like?</label>
              <select name="service" id="pets" className="toggle-box-service">
                <option value={1} alt='Pet Hosting' onClick={handleServiceChange}>Pet Hosting</option>
                <option value={2} alt='Home Sitting' onClick={handleServiceChange}>Home Sitting</option>
                <option value={3} alt='Dog Walking' onClick={handleServiceChange}>Dog Walking</option>
              </select>
            </div>
            <div className="input-box-div">
              <label for="input">Near?</label>
              <input
                name="input"
                className="input-field"
                placeholder="Search by city"
                type="text"
                onChange={handleCityChange}
              />
            </div>
          </div>
          <div className="second-search-div">
            <div className="radio-div" name="radio-div">
              {/* <label for='radio-div'>For what ype of pet?</label> */}
              <>
                <form>
                <fieldset className='pet-radio'>
                  <legend>Select your pet</legend>
                    <input
                      type="radio"
                      class="btn-check"
                      id="dog-btn-check"
                      autocomplete="off"
                      value={2} 
                      onClick={handlePetChange}
                      checked={pet === 2}
                    />
                    <label class="btn btn-primary" for="dog-btn-check">
                      Dog
                    </label>
                    <br />
                    <input
                      type="radio"
                      class="btn-check"
                      id="cat-btn-check"
                      autocomplete="off"
                      value={1}
                      onClick={handlePetChange}
                      checked={pet === 1}
                    />
                    <label class="btn btn-primary" for="cat-btn-check">
                      Cat
                    </label>
                    <br />
                    <input
                      type="radio"
                      class="btn-check"
                      id="other-btn-check"
                      autocomplete="off"
                      value={3} 
                      onClick={handlePetChange}
                      checked={pet === 3}
                    />
                    <label class="btn btn-primary" for="other-btn-check">
                      Other
                    </label>
                </fieldset>
                </form>
              </>
            </div>
            <div className='price-slider'>
                <RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]}>
                <RangeSliderTrack minH='32'>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
            </div>
          </div>
          <div className="third-search-div">
            <Calendar style={{width: '30vh'}} />
            <Link
              href={{
                pathname: "/search",
                query: { 
                  city: city, 
                  service: service,
                  pet: pet 
                },
              }}
              passHref
              style={{ textDecoration: "none" }}
            >
              <Button
                onClick={() => handleClick}
                className="sign-up"
                text="Search"
              ></Button>
            </Link>
          </div>
        </div>
        <div className="tagline-div">
          <h1>Helping you find
              the best sitters, 
              so you can 
              spend less & worry less
              </h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
