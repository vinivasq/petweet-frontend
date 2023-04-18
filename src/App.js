import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Signup from "./routes/Signup";
import Profile from "./routes/Profile";
import CreatePost from "./routes/CreatePost";
import { PostWrapper } from "./context/post-context";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <PostWrapper>
                <Home />
              </PostWrapper>
            </RequireAuth>
          }
        />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <PostWrapper>
                <Home />
              </PostWrapper>
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <PostWrapper>
                <Profile />
              </PostWrapper>
            </RequireAuth>
          }
        />
        <Route
          path="/createPost"
          element={
            <RequireAuth>
              <PostWrapper>
                <CreatePost />
              </PostWrapper>
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
