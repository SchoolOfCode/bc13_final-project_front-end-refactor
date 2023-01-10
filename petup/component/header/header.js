import Link from "next/link";
import React from "react";
import Button from "../button/button";

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://i.ibb.co/fxc9pws/dogpicproject.jpg"
        alt="dogpicproject"
      />
      <div className="navlinks">
        <h1 className="title">
          <Link href="/carer" style={{ textDecoration: "none" }}>
            Become a carer!
          </Link>
        </h1>
        <h1 className="title">
          <Link href="/sitter" style={{ textDecoration: "none" }}>
            Become a sitter!
          </Link>
        </h1>
      </div>
      <div className="button-div">
        <Button className="sign-in" text="Sign in" />
        <Button className="sign-in" text="Sign up" />
      </div>
    </div>
  );
};

export default Header;
