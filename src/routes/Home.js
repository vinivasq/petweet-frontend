import { Box } from "@chakra-ui/layout";
import React, { useEffect, useRef, useState } from "react";
import { getMorePosts, getPosts } from "../services/post";
import userPic from "../assets/images/default-user-icon.jpg";
import Navbar from "../components/Navbar";
import AddPetweet from "../components/AddPetweet";
import Petweet from "../components/Petweet";
import "../index.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [cursor, setCursor] = useState(0);
  const postListRef = useRef(null);

  useEffect(() => {
    const getFirstPosts = async () => {
      try {
        const postsResponse = await getPosts();
        setPosts(postsResponse.data.posts);
        setCursor(postsResponse.data.myCursor);
        console.log(cursor);
      } catch (error) {
        console.log(error);
        alert("Não foi possivel listar os Posts");
      }
    };

    const loadMorePosts = async () => {
      try {
        const morePosts = await getMorePosts(cursor);
        setPosts([...posts, ...morePosts.data.posts]);
        setCursor(morePosts.data.myCursor);
        console.log(morePosts.data);
      } catch (error) {
        console.log(error);
      }
    };

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const postListHeight = postListRef.current.clientHeight;
      const postListOffset = postListRef.current.offsetTop;

      if (
        cursor &&
        scrollTop + clientHeight >= scrollHeight &&
        postListOffset + postListHeight <= scrollTop + clientHeight
      ) {
        // O usuário chegou ao final da página
        console.log("final da pagina");
        loadMorePosts();
      }
    };

    window.addEventListener("scroll", handleScroll);

    getFirstPosts();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cursor]);

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
