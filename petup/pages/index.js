import Link from "next/link";
import Header from "../component/header/header";
import Button from "../component/button/button";

export default function Home() {
  return (
    <>
      <Header />
      <div className="main-div">
        <div className="searchBox-div">
          <input className="input-field" type="text" />
          <Button className="search-button" text="Search"></Button>
        </div>
        <div className="tagline-div">
          <h1>Find pet sitters</h1>
        </div>
      </div>
    </>
  );
}
