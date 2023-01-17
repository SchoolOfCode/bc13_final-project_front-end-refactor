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




export default function Home() {
  const [input, setInput] = useState("");


  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleClick() {
    console.log(input);
  }
  // console.log(input)
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
                <option value="Pet hosting">Pet hosting</option>
                <option value="home sitting">home sitting</option>
              </select>
            </div>

            <div className="input-box-div">
              <label for="input">Near?</label>
              <input
                name="input"
                className="input-field"
                placeholder="Search by city"
                type="text"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="second-search-div">
            <div className="radio-div" name="radio-div">
              {/* <label for='radio-div'>For what ype of pet?</label> */}
              <>
                {/* <input className="radio" type="radio" id="dog" name="pet_type" value="dog"></input>
              <label for="dog">dog</label>
              <input className="radio" type="radio" id="cat" name="pet_type" value="cat"></input>
              <label for="dog">cat</label>
              <input
                type="radio"
                id="other"
                name="pet_type"
                value="other"
                className="radio"
              ></input>
              <label for="dog">other</label> */}
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btn-check"
                  autocomplete="off"
                />
                <label class="btn btn-primary" for="btn-check">
                  Dog
                </label>
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btn-check"
                  autocomplete="off"
                />
                <label class="btn btn-primary" for="btn-check">
                  Cat
                </label>
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btn-check"
                  autocomplete="off"
                />
                <label class="btn btn-primary" for="btn-check">
                  Other
                </label>
              </>
            </div>
            <div className="number-input" name="number-input">
              <label for="number-input">Rate?</label>
              <Example />
            </div>
          </div>
          <div className="third-search-div">
            {/* <Calendar style={{width: '30vh'}} /> */}
            {/* <form className="checkboxes">
          <input type='checkbox' value='dog'/>
          <label>Dog</label>
          <input type='checkbox' value='cat'></input>
          <label>Cat</label>
          </form> */}
            {/* To send data to next page we pass this object in the Link component */}
            {/* passHref forces Link to send href property to its child (in this case Button)*/}
            <Link
              href={{
                pathname: "/search",
                query: { city: input },
              }}
              passHref
              style={{ textDecoration: "none" }}
            >
              <Button
                onClick={() => handleClick}
                className="search-button"
                text="Search"
              ></Button>
            </Link>
          </div>
        </div>
        <div className="tagline-div">
          <h1>Find pet sitters</h1>
          <p style={{ color: "#2B4141" }}>
            {" "}
            Whatever your pets need, PetBrB will help you get the best
            independent sitters, so you can spend less and worry less.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
