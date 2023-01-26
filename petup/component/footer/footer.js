import Link from 'next/link'
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="margin-div-footer">
      <footer>
      <h1 className="title">
        <Link href="/contact" style={{ textDecoration: "none" }}>
        <span className='sitter-title'>Contact us</span>
        </Link>
        </h1>
        <img
          src="https://i.ibb.co/6D4qNm8/petbrb-high-resolution-logo-white-on-transparent-background.png"
          alt="PetBrB-logo"
          style={{width: '10rem', height: '2rem'}}
        ></img>
        {/* <Image src="/petbrb-high-resolution-logo-white-on-transparent-background.png" 
            width={100} 
            height={100}/> */}
          <h1 className="title">
          <Link href="" style={{ textDecoration: "none" }}>
            <span className='sitter-title'>Built by Team reFACtor</span>
            </Link>
        </h1>
       
      </footer>
    </div>
  );
};

export default Footer