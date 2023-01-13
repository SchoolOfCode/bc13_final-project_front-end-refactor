import Link from "next/link";
import Header from "../component/header/header";
import Head from "next/head";
import Button from "../component/button/button";
import { useState } from "react";
import Footer from "../component/footer/footer";

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
      </Head>
      <Header />
      <div className="main-div">
        <div className="searchBox-div">
          <input className="input-field" placeholder="Search by city" type="text" onChange={handleChange} />
          {/* <form className="checkboxes">
          <input type='checkbox' value='dog'/>
          <label>Dog</label>
          <input type='checkbox' value='cat'></input>
          <label>Cat</label>
          </form> */}
        
        
        {/* To send data to next page we pass this object in the Link component */}
        {/* passHref forces Link to send href property to its child (in this case Button)*/}
          <Link href={{
            pathname: "/search",
            query: {city: input}
          }} passHref style={{ textDecoration: "none" }} >
          <Button onClick={() => handleClick} className="search-button" text="Search">
           </Button>
          </Link>
          
        </div>
        <div className="tagline-div">
          <h1>Find pet sitters</h1>
          <p style={{color: '#2B4141'}}> Whatever your pets need, PetBrB will help you get the best independent sitters, so you can spend less and worry less.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
