import React from "react";
import Head from "next/head"; 
import Header from "../component/header/header";

const componentName = () => {
  return (
    <>
      <Head>
        <title>Become a Sitter!</title>
      </Head>
      <Header />
      <div>
        <h1>sitter page</h1>
      </div>
    </>
  );
};

export default componentName;
