import { Box } from "@chakra-ui/layout";
import React, { useEffect, useRef } from "react";
import userPic from "../assets/images/default-user-icon.jpg";
import Navbar from "../components/Navbar";
import AddPetweet from "../components/AddPetweet";
import Petweet from "../components/Petweet";
import "../index.css";
import { usePost } from "../context/post-context";

const Home = () => {
  const postListRef = useRef(null);
  const { posts, setRef } = usePost();

  useEffect(() => {
    setRef(postListRef);
  }, [setRef]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <AddPetweet to="/createPost" state={{ from: "/home" }} />
        <Box className="wrapper-top" ref={postListRef}>
          {posts.map((post, i) => {
            return <Petweet key={i} image={userPic} post={post} />;
          })}
        </Box>
      </main>
    </>
  );
};

export default Home;
