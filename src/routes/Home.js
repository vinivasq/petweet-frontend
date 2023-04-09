import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import AddPetweet from "../components/AddPetweet";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <AddPetweet to="/createPost" />
      </main>
    </>
  );
};

export default Home;
