import React from "react";
import Head from "next/head"; 
import Header from "../component/header/header";
import Radio from "../component/radioButtons/radio";

const componentName = () => {
  return (
    <>
      <Head>
        <title>Become a Sitter!</title>
      </Head>
      <Header />
      <div>
        <h1>sitter page</h1>
        <Radio />
      </div>
    </>
  );
};

export default componentName;
