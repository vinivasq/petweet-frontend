import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getMorePosts,
  getMoreUserPosts,
  getPosts,
  getUserPosts,
} from "../services/post";

const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [cursor, setCursor] = useState(0);
  const [ref, setRef] = useState(null);

  const getFirstPosts = async () => {
    if (user) {
      try {
        const userPosts = await getUserPosts(user.id);
        setPosts(userPosts.data.posts);
        console.log(userPosts.data.posts);
        setCursor(userPosts.data.myCursor);
      } catch (error) {
        alert("Não foi possivel listar os Posts");
        console.log(error);
      }
    } else {
      try {
        const postsResponse = await getPosts();
        setPosts(postsResponse.data.posts);
        setCursor(postsResponse.data.myCursor);
      } catch (error) {
        console.log(error);
        alert("Não foi possivel listar os Posts");
      }
    }
  };

  const loadMorePosts = async () => {
    if (user) {
      try {
        const moreUserPosts = await getMoreUserPosts(cursor, user.id);
        setPosts([...posts, ...moreUserPosts.data.posts]);
        console.log(moreUserPosts.data.posts);
        setCursor(moreUserPosts.data.myCursor);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const morePosts = await getMorePosts(cursor);
        setPosts([...posts, ...morePosts.data.posts]);
        setCursor(morePosts.data.myCursor);
      } catch (error) {
        console.log(error);
      }
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
    getFirstPosts();
  }, [ref, user]);

  useEffect(() => {
    console.log(`cursor global: ${cursor}`);
    // console.log(`cursor user: ${userCursor}`);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cursor]);

  return (
    <PostContext.Provider value={{ posts, user, setUser, setRef }}>
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
