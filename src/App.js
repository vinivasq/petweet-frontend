import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Signup from "./routes/Signup";
import Profile from "./routes/Profile";
import CreatePost from "./routes/CreatePost";
import { PostProvider } from "./context/post-context";

function App() {
  return (
    <AuthProvider>
      <PostProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/createPost"
            element={
              <RequireAuth>
                <CreatePost />
              </RequireAuth>
            }
          />
        </Routes>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
