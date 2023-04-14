import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProfileBio from "../components/ProfileBio";
import AddPetweet from "../components/AddPetweet";
import profilePic from "../assets/images/doggos/userpic.png";
import { getUserPosts } from "../services/post";
import { useAuth } from "../context/auth-context";
import Petweet from "../components/Petweet";
import { Box } from "@chakra-ui/react";

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const user = useAuth().user;

  console.log(user.id);

  useEffect(() => {
    const getPosts = async (userId) => {
      try {
        const postsResponse = await getUserPosts(userId);
        setPosts(postsResponse.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts(user.id);
  }, [isLoading]);

  return (
    <>
      <header>
        <Navbar />
        <ProfileBio />
        <AddPetweet to="/createPost" state={{ from: "/profile" }} />
      </header>
      <main>
        <Box marginTop="1px">
          {posts.map((post, i) => {
            return (
              <Petweet
                key={i}
                image={profilePic}
                userId={user.id}
                content={post.content}
              />
            );
          })}
        </Box>
      </main>
    </>
  );
};

export default Profile;
