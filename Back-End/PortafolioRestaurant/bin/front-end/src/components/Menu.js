import React from "react";
import { useLocalState } from "../util/useLocalStorage";

const Menu = () => {

  const [jwt, setJwt] = useLocalState("", "jwt");

  return (
    <div>
      <h1>Front-End Page</h1>
      <div>JWT Values is {jwt}</div>
    </div>
  );
};

export default Menu;
