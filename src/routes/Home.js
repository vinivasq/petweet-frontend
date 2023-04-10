import React from "react";
import niko from "../assets/images/doggos/niko.png";
import "../index.css";
import Navbar from "../components/Navbar";
import AddPetweet from "../components/AddPetweet";
import Petweet from "../components/Petweet";
import { Box } from "@chakra-ui/layout";

const content = `Name a show where the lead character is the worst character on the show I’ll get Sabrina Spellman. Name a show where the lead character is the worst character on the show I’ll get Sabrina Spellman. `;

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <AddPetweet to="/createPost" />
        <Box className="wrapper-top">
          <Petweet
            classname
            image={niko}
            user={{ name: "Niko Viralata", username: "@doguinhoniko_20" }}
            content={content}
          />
        </Box>
      </main>
    </>
  );
};

export default Home;
