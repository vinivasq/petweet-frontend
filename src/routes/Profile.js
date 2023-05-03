import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { usePost } from "../context/post-context";
import { getUserByUsername } from "../services/user";
import Navbar from "../components/Navbar";
import ProfileBio from "../components/ProfileBio";
import AddPetweet from "../components/AddPetweet";
import profilePic from "../assets/images/doggos/userpic.png";
import Petweet from "../components/Petweet";

const Profile = () => {
  const [isLoading, setLoading] = useState(true);
  const { posts, user, setUser, setRef } = usePost();
  const postListRef = useRef(null);
  const location = useLocation();
  const username = location.search.replace(/\?/, "");

  useEffect(() => {
    const handleProfile = async (username) => {
      try {
        const userResponse = (await getUserByUsername(username)).data;
        setUser(userResponse);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    setRef(postListRef);
    handleProfile(username);

    return () => {
      setUser(null);
    };
  }, [username, setRef, setUser]);

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <>
          <header>
            <Navbar />
            <ProfileBio user={user} />
          </header>
          <main>
            <AddPetweet to="/createPost" state={{ from: "/profile" }} />
            <Box marginTop="1px" ref={postListRef}>
              {posts.map((post, i) => {
                return <Petweet key={i} image={profilePic} post={post} />;
              })}
            </Box>
          </main>
        </>
      )}
    </>
  );
};

export default Profile;
