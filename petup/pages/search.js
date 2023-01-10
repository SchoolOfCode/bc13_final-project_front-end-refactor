import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../component/header/header";
import { getAllUsers } from "../lib/search";
import { DisplayResults } from "../component/displayResults/displayResults";

const Search = () => {
  //using this hook to get data from previous page
  const router = useRouter();
  const data = router.query;
  //datacame out as object with input as key and we are accessing it
  const input = Object.keys(data);
  // console.log(input[0]);
  function getData() {
    const response = getAllUsers();
    // const data = response.json()
    console.log(response);
    return response;
    // console.log(typeof(response[i].address.city))
  }
  const response = getData();
  const result = citySearch(response, input);

    //for loop function to find matching key for and returns an array of user object that matches key city
  function citySearch(response, input) {
    let result = [];
    for (let i = 0; i < response.length; i++) {
      if (response[i].address.city == input) {
        let user = { name: response[i].name, city: response[i].address.city };
        result.push(user);
      }
    }
    console.log(result);
    return result;
  }

  return (
    <div>
      <Header />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <div>
        {result.map((user) => {
          return (
              <DisplayResults name={user.name} city={user.city} />
          );
        })}
      </div>
    </div>
  );
};

export default Search;
