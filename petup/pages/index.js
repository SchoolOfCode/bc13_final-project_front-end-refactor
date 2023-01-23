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

// import Calendar from 'react-calendar';
import Calendar from "../component/calendar/calendar";
import Example from "../component/numberInput/input";
import Radio from "../component/radioButtons/radio";


// how we set min and max value for price?

// so we have a min value and a max value
// onchange the states get updated with their min and max value



export default function Home() {
  const [city, setCity] = useState("");
  const [service, setService] = useState('pet_hosting');
  const [budget, setBudget] = useState(100)
  const [pet, setPet] = useState('pet_dog')
  const [priceString, setPriceString] = useState('(per night)');
  const [budgetWarning, setBudgetWarning] = useState('')

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  /**
   * 
   * Takes in a value which is a string that corresponds to the type of service
   */
  function handleServiceChange(e) {
    // if service is set to dog walking, then pet will also be set to Dog
    if (e.target.value == 'dog_walking') {
      setPet('pet_dog')
      setPriceString('(per hour)')
    }
    setPriceString('(per night)');
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

  function handleBudgetChange(e) {
    const regex = /^[0-9\b]+$/;
    const value = e.target.value;
    if (value === '' || regex.test(value)) {
      setBudget(value);
      setBudgetWarning('')
    } else if (value < 0){
      setBudget(0);
      setBudgetWarning('You must not enter a number lower than zero');
    } else {
      setBudgetWarning('You must only enter a whole numerical value');
    }
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
      
    <div className="feature">

        <div className="searchBox-div">
          <div className="top-search-div">
            <div className="pet-service">
              <label for="service">What service would you like?</label>
              <select name="service" id="pets" className="toggle-box-service">
                <option value='pet_hosting' alt='Pet Hosting' onClick={handleServiceChange}>Pet Hosting</option>
                <option value='house_sitting' alt='Home Sitting' onClick={handleServiceChange}>Home Sitting</option>
                <option value='dog_walking' alt='Dog Walking' onClick={handleServiceChange}>Dog Walking</option>
              </select>
            </div>

            <div className="input-box-div">
            
            <label for="input">Near?</label>
            <svg className="icon" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
		</svg>
              <input
                name="input"
                className="input-field"
                placeholder="Where would you like to look for?"
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
                      value='pet_dog' 
                      onClick={handlePetChange}
                      checked={pet === 'pet_dog'}
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
                      value='pet_cat'
                      onClick={handlePetChange}
                      checked={pet === 'pet_cat'}
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
                      value='pet_other' 
                      onClick={handlePetChange}
                      checked={pet === 'pet_other'}
                    />
                    <label class="btn btn-primary" for="other-btn-check">
                      Other
                    </label>
                </fieldset>
                </form>
              </>
            </div>
           <div className='price-container'>
                <div className='text-container'>
                  <label for='max'>Set your budget {priceString}.</label>
                </div>
                <div className='budget-container'>
                  <span class="currencyinput">£
                    <input className='budget' name='max' placeholder='30' pattern="[0-9]+" onChange={handleBudgetChange}/>
                    <h6 className='budget-warning'>{budgetWarning}</h6>
                  </span>
                </div>
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
                  pet: pet,
                  budget: budget 
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
      </div>
      <Footer />
    </>
  );
}
