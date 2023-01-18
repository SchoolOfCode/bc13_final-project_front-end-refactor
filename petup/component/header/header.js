import Link from "next/link";
import React from "react";
import Button from "../button/button";
import { useSession, signIn, signOut } from "next-auth/react"
import Logo from '../../public/petbrb-high-resolution-logo-white-on-transparent-background.png';

const Header = () => {

  {/*This is OAuth*/}
  const { session, status } = useSession()
  const userEmail = session?.user.email;

  // if (status === "loading") {
  //   return <p>Hang on there...</p>
  // }

  // if (status === "authenticated") {
  //   return (
  //     <>
  //       <p>Signed in as {userEmail}</p>
  //       <button onClick={() => signOut()}>Sign out</button>
  //       <img src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" />
  //     </>
  //   )
  // }
{/*This is OAuth*/}

  return (
    <div className="header">
    <Link href='/'>
    <img
        src={Logo}
        width='200px'
        height='200px'
        alt="logo"
        className='logo'
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
            Become a sitter
          </Link>
        </h1>
    
        {status === "authenticated" ?    
          <Button onClick = {() => signOut()} className="sign-up" text="Sign Out" /> : 
          (<><Button onClick = {() => signIn()} className="sign-in" text="Log In" />
          <Button className="sign-up" text="Sign Up" /> </>)
          }

        
   
      </div>
    </div>
  );
};

export default Header;
