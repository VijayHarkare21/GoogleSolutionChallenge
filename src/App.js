import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
import Post from "./pages/Post";
import Need from "./pages/Need";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" exact element={<Signup />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/post" element={<Post />} />
          <Route path="/need" element={<Need />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
