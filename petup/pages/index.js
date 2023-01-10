import Link from "next/link";
import Header from "../component/header/header";
import Button from "../component/button/button";
import { useState } from "react";

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
      <Header />
      <div className="main-div">
        <div className="searchBox-div">
          <input className="input-field" type="text" 
            onChange={handleChange}
          />
           {/* To send data to next page we pass this object in the Link component */}
          <Link href={{
            pathname: "/search",
            query: input
          }} style={{ textDecoration: "none" }} >
          <Button onClick={() => handleClick} className="search-button" text="Search">
           </Button>
          </Link>
        </div>
        <div className="tagline-div">
          <h1>Find pet sitters</h1>
        </div>
      </div>
    </>
  );
}
