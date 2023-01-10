import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Search = () => {
  //using this hook to get data from previous page
  const router = useRouter();
  const data = router.query;
  //datacame out as object with input as key and we are accessing it 
  const input = Object.keys(data);
  // console.log(input[0]);
  return (
    <div>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <p>{input}</p>
    </div>
  );
};

export default Search;
