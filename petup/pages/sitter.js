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
          <h1>Why becoming a sitter?</h1>
          <p>
            Are you passionate about working with children and want to make a
            difference in their lives? Then becoming a sitter with us is the
            perfect opportunity for you! Our agency connects families with
            responsible and reliable sitters who can provide a safe and
            nurturing environment for children.
          </p>
          <p>
            As a sitter with our agency, you'll have the opportunity to work
            with a variety of families and children of different ages and
            backgrounds. You'll be able to choose the hours and days that work
            best for you, and you'll be able to set your own rates. Plus, you'll
            have access to resources and support to help you succeed as a
            sitter.
          </p>
          <p>
            To become a sitter with our agency, you'll need to complete an
            application and go through a background check. We also require all
            of our sitters to have experience working with children and to be
            CPR and First Aid certified. We want to ensure that our families are
            getting the best care for their children.
          </p>
          <Button  className='sign-up' text='Apply now!'/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default componentName;
