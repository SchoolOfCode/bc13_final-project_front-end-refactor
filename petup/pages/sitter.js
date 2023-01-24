import React from "react";
import Head from "next/head";
import Header from "../component/header/header";
import Footer from "../component/footer/footer.js";
import Button from "../component/button/button";

const componentName = () => {
  return (
    <>
      <Head>
        <title>Become a Sitter!</title>
      </Head>
      <Header />
      <div className="sitter-main-div">
        <div className="paragraphs">
          <h1 style={{marginTop: '1rem'}}>Why become a sitter?</h1>
          <p style={{marginTop: '1rem'}}>
          Are you an animal lover looking for a rewarding and flexible job opportunity? We are currently seeking experienced and reliable pet sitters to join our team. As a pet sitter, you will have the opportunity to work with a variety of animals and provide quality care for pets while their owners are away. 
          </p>
          <p style={{marginTop: '1rem'}}>
          Duties may include daily check-ins, feeding, administering medication, providing exercise and playtime, and general companionship. Our pet sitters are independent contractors, which allows you to set your own schedule and take on as many clients as you're comfortable with.
          </p>
          <p style={{marginTop: '1rem'}}>
          We are looking for individuals who are responsible, dependable and possess a genuine love for animals. In addition, you must have your own reliable transportation and be able to pass a background check. If you're ready to make a difference in the lives of pets and their owners, apply to become a pet sitter with us today!
          </p>
          <Button  className='sign-up sitter-button'  text='Apply now!'/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default componentName;
