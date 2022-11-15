import React from "react";
import "./index.css";

// Components
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";

const App = () => {
  return (
    <>
      <NavBar />
      <UserProfile />
      <Contacts />
      <Posts />
    </>
  );
};

export default App;
