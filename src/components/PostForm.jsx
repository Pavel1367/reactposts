import React, { useRef, useState } from "react";
import "../styles/Form.css";
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";
export default function PostForm({ create }) {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    if (post.title.length && post.body.length) {
      const newPost = {
        ...post,
        id: Date.now(),
      };
      create(newPost);
      setPost({ title: "", body: "" });
    } 
    
  };

  return (
    <div>
      <form>
        <Input
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Header"
        />
        <Input
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          placeholder="body"
        />
        <Button onClick={addNewPost}>Add post</Button>
      </form>
    </div>
  );
}
