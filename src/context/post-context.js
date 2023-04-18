import React, { createContext, useContext, useEffect, useState } from "react";
import { getMorePosts, getPosts } from "../services/post";

const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [cursor, setCursor] = useState(0);
  const [ref, setRef] = useState(null);

  const getFirstPosts = async () => {
    try {
      const postsResponse = await getPosts();
      setPosts(postsResponse.data.posts);
      setCursor(postsResponse.data.myCursor);
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
    } catch (error) {
      console.log(error);
    }
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cursor, ref]);

  if (!cursor) {
    getFirstPosts();
  }

  return (
    <PostContext.Provider value={{ posts, setPosts, setRef, getFirstPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => {
  return useContext(PostContext);
};

export const PostWrapper = ({ children }) => {
  return <PostProvider>{children}</PostProvider>;
};
