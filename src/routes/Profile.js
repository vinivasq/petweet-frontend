import React from "react";
import Navbar from "../components/Navbar";
import ProfileBio from "../components/ProfileBio";
import AddPetweet from "../components/AddPetweet";

const Profile = () => {
  return (
    <>
      <header>
        <Navbar />
        <ProfileBio />
        <AddPetweet />
      </header>
    </>
  );
};

export default Profile;
