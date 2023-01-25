import Link from "next/link";
import Header from "../component/header/header";
import Head from "next/head";
import Button from "../component/button/button";
import { useState } from "react";
import Footer from "../component/footer/footer";
import Image from 'next/image';

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
        <meta name="description" content="PetBrB homepage. Search engine that allows you to search for Pet sitter by location and type of pet care you require. Options between Cat,Dog and Other. Input field with price prompt, for your desired budget."></meta>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link>
      </Head>
      
      <Header />
      <div className="main-div">
      <div className="top-div">
    <div className="feature">

    
    <div className = "margin-div">
      <div className = "top-middle-div">
      
        <div className="searchBox-div">
          <div className="top-search-div">
            <div className="pet-service">
              <legend for="service">What service would you like?</legend>
              <div className = "select-div">
              <Image
              className = 'luggage-icon'
              src = '/icons8-luggage-96.png'
              alt = "luggage-icon"
               width = {100}
               height = {100}
              />
              <select name="service" id="pets" className="toggle-box-service">
                <option value='pet_hosting' alt='Pet Hosting' onClick={handleServiceChange}>Pet Hosting</option>
                <option value='house_sitting' alt='Home Sitting' onClick={handleServiceChange}>Home Sitting</option>
                <option value='dog_walking' alt='Dog Walking' onClick={handleServiceChange}>Dog Walking</option>
              </select>
              </div>
            </div>

            <div className="input-box-div">
            <legend for="input">Near?</legend>
            <Image 
              className = 'search-icon'
              src = '/icons8-interface-96.png'
              alt = "search-icon"
               width = {100}
               height = {100}
              />
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
              <>
                <form>
                <fieldset className='pet-radio'>
                  <legend>For what type of pet?</legend>
                  <div className = "pet-radio-box">
                  <div className = "input-radio-div">
                  <label class="btn btn-primary" for="dog-btn-check">
                    <input
                      type="radio"
                      class="btn-check"
                      id="dog-btn-check"
                      autocomplete="off"
                      value='pet_dog' 
                      onClick={handlePetChange}
                      checked={pet === 'pet_dog'}
                    />
                    <Image
                      src = "/icons8-dog-sit-90.png"
                      width = {100}
                      height = {100}
                      alt="dog-icon-sitting"
                      ></Image>
                      Dog
                    </label>
                    </div>
                    <br />
                    <div className = "input-radio-div">
                    <label class="btn btn-primary" for="cat-btn-check">
                    <input
                      type="radio"
                      class="btn-check"
                      className = "btn-check"
                      id="cat-btn-check"
                      autocomplete="off"
                      value='pet_cat'
                      onClick={handlePetChange}
                      checked={pet === 'pet_cat'}
                    />
                     <Image
                      src = "/icons8-pet-commands-stay-100.png"
                      width = {100}
                      height = {100}
                      alt=" cat-icon"
                      ></Image>
                      Cat
                    </label>
                    </div>
                    <br />
                    <div className = "input-radio-div">
                    <label class="btn btn-primary" for="other-btn-check">
                    <input
                      type="radio"
                      class="btn-check"
                      id="other-btn-check"
                      autocomplete="off"
                      value='pet_other' 
                      onClick={handlePetChange}
                      checked={pet === 'pet_other'}
                    />
                    <Image
                      src = "/icons8-easter-rabbit-96.png"
                      width = {100}
                      height = {100}
                      alt="rabbit-icon"
                      ></Image>
                      Other
                    </label>
                    </div>
                    </div>
                </fieldset>
                </form>
              </>
            </div>

           <div className='price-container'>
                  <legend  className="budget-label" for='max'>For how much? {priceString}.</legend>
                <div className='budget-container'>
                  <input className='budget' name='min' placeholder='Min £0'/>
                    <input className='budget' name='max' placeholder='Max £100' pattern="[0-9]+" onChange={handleBudgetChange}/>
                    <p className='budget-warning'>{budgetWarning}</p>
                </div>
            </div>
          </div>

          <div className="third-search-div">
          <div className = "date-div">
          <label for="date-search">Dates</label>
            <div className = "date-search">
              <p> Start date </p>  <Image
                      src = "/icons8-chevron-right-90.png"
                      width = {100}
                      height = {100}
                      alt=" chevron-right"
                      ></Image> <p>End date</p>
            </div>
            </div>

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
              {/* <Image 
              className = 'search-icon2'
              src = '/icons8-interface-96.png'
              alt = "search-icon"
               width = {100}
               height = {100}
              /> */}
              <svg className="search-icon2" fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
		</svg>
		
              <Button
                onClick={() => handleClick}
                className="search-button"
                text="Search Now"
              >
              

              </Button>
            </Link>
          </div>
        </div>
        <div className="tagline-div">
          <h1>Helping you find
              the best sitters, 
              so you can <span>spend less</span> & <span>worry less</span>
              </h1>
        </div>
            </div>
        <div className = "middle-div">
          <h1>Looking for a sitter doesn't have to be difficult
              </h1>
        </div>
        </div>
      </div>
      </div>
     
      <div className = "bottom-div"> <div className="bottom-margin-div">
       <h1> How does PetBrB work?</h1>
       
       <div className = "step1-div"> <Image
          className = "step1-icon"
          src = "/icons8-funnel-100.png"
          width = {100}
          height ={100}
          alt="small-icon-funnel"
          ></Image>
        <p className= "step1"> 1. Search for pet sitters in an area, for where you want, for how much you want, and for when you want</p>
          </div>
          <div className = "step2-div">
        <p>2. Contact your found sitter to get to know them more and how they can help you and your needs for your pets. </p>  <Image
          className = "step2-icon"
          src = "/icons8-unread-messages-100.png"
          width = {100}
          height ={100}
          alt="small-icon-unread-message"
          ></Image>
       </div>
       <div className = "step3-div">
       <Image
          className = "step3-icon"
          src = "/icons8-handshake-100.png"
          width = {100}
          height ={100}
          alt="small-icon-handshake"
          ></Image>
        <p className= "step3">3. Once an agree arrangement is made, you can be free of stress and enjoy your time with your pet!</p>
       </div>
      
      </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
