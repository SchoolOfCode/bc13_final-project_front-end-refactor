import React from "react";
import Head from "next/head";
import Header from "../component/header/header";
import Footer from "../component/footer/footer.js";
import Button from "../component/button/button";
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";

const componentName = () => {
  const { data: session, status } = useSession()

  return (
    <>
      <Head>
        <title>Become a Sitter!</title>
      </Head>
      <Header />
      <div className="sitter-main-div">
        <div className="paragraphs">
          <div className='title-sitter'>
            <h1 style={{marginTop: '1rem'}}>Why become a sitter?</h1>
          </div>
          <p style={{marginTop: '1rem'}}>
          Are you an animal lover looking for a <span>rewarding and flexible job opportunity</span>? We are currently seeking experienced and reliable pet sitters to join our team. As a pet sitter, you will have the opportunity to work with a variety of animals and provide quality care for pets while their owners are away. 
          </p>
          <p style={{marginTop: '1rem'}}>
          Duties may include daily check-ins, feeding, administering medication, providing exercise and playtime, and general companionship. Our pet sitters are <span>independent contractors</span>, which allows you to set <span>your own schedule</span> and take on as many clients as you're comfortable with.
          </p>
          <p style={{marginTop: '1rem'}}>
          We are looking for individuals who are <span>responsible, dependable</span> and possess a genuine <span>love for animals</span>. In addition, you must have your own reliable transportation and be able to pass a background check. If you're ready to make a difference in the lives of pets and their owners, apply to become a pet sitter with us today!
          </p>

          {status === "authenticated" ?   
        <div className="">
        <Link
              href={{
                pathname: "/profile",
                query: { 
                },
              }}
              passHref
              style={{ textDecoration: "none" }}
            >
        <Button  className='sign-up sitter-button' id='button' text='Apply Now'/>
        </Link>
        </div>
         : 
          (<> <Button  className='sign-up sitter-button' id='button' text='Apply Now'/> </>)
          } 

          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default componentName;
