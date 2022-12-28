import React, { useState, useMemo, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import "./styles/App.css";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/posts/:id" element={<PostPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="*" element={<Posts/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
