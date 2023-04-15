import { Box } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { getAllPosts } from "../services/post";
import userPic from "../assets/images/default-user-icon.jpg";
import Navbar from "../components/Navbar";
import AddPetweet from "../components/AddPetweet";
import Petweet from "../components/Petweet";
import "../index.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsResponse = await getAllPosts();
        setPosts(postsResponse.data);
      } catch (error) {
        console.log(error);
        alert("Não foi possivel listar os Posts");
      }
    };
    getPosts();
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <AddPetweet to="/createPost" state={{ from: "/home" }} />
        <Box className="wrapper-top">
          {posts.map((post, i) => {
            return <Petweet key={i} image={userPic} post={post} />;
          })}
        </Box>
      </main>
    </>
  );
};

export default Home;
