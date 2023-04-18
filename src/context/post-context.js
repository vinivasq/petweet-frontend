import React, { createContext, useContext, useEffect, useState } from "react";
import { getMorePosts, getPosts } from "../services/post";

const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [ref, setRef] = useState(null);

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
      const postListHeight = ref?.current?.clientHeight;
      const postListOffset = ref?.current?.offsetTop;

      if (
        cursor > 1 &&
        scrollTop + clientHeight >= scrollHeight &&
        postListOffset + postListHeight <= scrollTop + clientHeight
      ) {
        // O usuário chegou ao final da página
        loadMorePosts();
      }
    };

    if (!cursor && ref) {
      getFirstPosts();
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cursor, ref]);

  return (
    <PostContext.Provider value={{ posts, setRef }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => {
  return useContext(PostContext);
};
