import Link from "next/link";
import React from "react";
import Button from "../button/button";

const Header = () => {
  return (
    <div className="header">
    <Link href='/'>
    <img
        src="https://i.ibb.co/0fPsQsW/logo-no-background.png" 
        alt="logo"
        
      />
    </Link>
      
      {/* <div className="navlinks"> */}
        {/* <h1 className="title">
          <Link href="/carer" style={{ textDecoration: "none" }}>
            Become a carer!
          </Link>
        </h1> */}
        {/* <h1 className="title">
          <Link href="/sitter" style={{ textDecoration: "none" }}>
            Become a sitter!
          </Link>
        </h1> */}
      {/* </div> */}
      <div className="button-div">
      <h1 className="title">
          <Link href="/sitter" style={{ textDecoration: "none" }}>
            Become a sitter!
          </Link>
        </h1>
        <Button className="sign-in" text="Sign in" />
        <Button className="sign-up" text="Sign up" />
      </div>
    </div>
  );
};

export default Header;
