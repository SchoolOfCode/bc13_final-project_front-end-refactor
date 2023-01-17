import Link from "next/link";
import React from "react";
import Button from "../button/button";
import { useSession, signIn, signOut } from "next-auth/react"

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
    
        {status === "authenticated" ?    
          <Button onClick = {() => signOut()} className="sign-up" text="Sign out" /> : 
          (<><Button onClick = {() => signIn()} className="sign-in" text="Sign in" />
          <Button className="sign-up" text="Sign up" /> </>)
          }

        
   
      </div>
    </div>
  );
};

export default Header;
