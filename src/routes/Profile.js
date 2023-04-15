import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getUserPosts } from "../services/post";
import { getUserByUsername } from "../services/user";
import Navbar from "../components/Navbar";
import ProfileBio from "../components/ProfileBio";
import AddPetweet from "../components/AddPetweet";
import profilePic from "../assets/images/doggos/userpic.png";
import Petweet from "../components/Petweet";

const Profile = () => {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const username = location.search.replace(/\?/, "");

  useEffect(() => {
    const handleProfile = async (username) => {
      try {
        const user = (await getUserByUsername(username)).data;
        const posts = (await getUserPosts(user.id)).data;
        setUser(user);
        setPosts(posts);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    handleProfile(username);
  }, [username]);

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <>
          <header>
            <Navbar />
            <ProfileBio user={user} />
            <AddPetweet to="/createPost" state={{ from: "/profile" }} />
          </header>
          <main>
            <Box marginTop="1px">
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
