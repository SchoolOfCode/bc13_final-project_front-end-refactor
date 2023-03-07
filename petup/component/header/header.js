import Link from "next/link";
import React from "react";
import Button from "../button/button";
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"


const Header = () => {

  {/*This is OAuth*/}
  const { data: session, status } = useSession()
  const userEmail = session?.user.email;
  const userName = session?.user.name.split(" ")[0]; //takes first name
  const userImage = session?.user.image;
  //console.log(session)

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
    <div className = "margin-div-header">
    <Link href='/'>
      {/* <Image src="/petbrb-high-resolution-logo-white-on-transparent-background.png" width={100} height={100}/> */}
      <img src='https://i.ibb.co/6D4qNm8/petbrb-high-resolution-logo-white-on-transparent-background.png' alt="Pet-Brb-logo"></img>
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
            <span className='sitter-title'>Become a sitter</span>
          </Link>
        </h1>
    
        {status === "authenticated" ?   
        <div className="button-username">
        <Link
              href={{
                pathname: "/profile",
                query: { 
                },
              }}
              passHref
              style={{ textDecoration: "none" }}
            >
        <span className = "link-username">Hi, {userName}</span>
        </Link>
        <img src={userImage} alt='profile-image'></img>
        <Button onClick = {() => signOut()} className="sign-up" text="Sign out" />
        </div>
         : 
          (<><Button onClick = {() => signIn()} className="sign-in" text="Sign in" />
          <Button className="sign-up" text="Sign up" /> </>)
          } 
      </div>
    </div>
    </div>
  );
};

export default Header;
