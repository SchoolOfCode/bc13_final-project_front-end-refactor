import Link from 'next/link'
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="margin-div-footer">
      <footer>
        <Link href="/contact" style={{ textDecoration: "none" }}>
          <h2 className="contact-us">Contact us</h2>
        </Link>
        <img
          src="https://i.ibb.co/6D4qNm8/petbrb-high-resolution-logo-white-on-transparent-background.png"
          alt="PetBrB-logo"
          style={{width: '10rem', height: '2rem'}}
        ></img>
        {/* <Image src="/petbrb-high-resolution-logo-white-on-transparent-background.png" 
            width={100} 
            height={100}/> */}
        <h2>Built by Team reFACtor</h2>
      </footer>
    </div>
  );
};

export default Footer