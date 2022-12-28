import React from 'react'
import Button from './UI/button/Button'
import { useNavigate } from 'react-router-dom'
export default function PostItem(props, remove) {
  const router = useNavigate()
  
    
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.post.id}.{props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
          <Button onClick={() => router(`/posts/${props.post.id}`)} >Открыть</Button>
          <Button onClick={() => props.remove(props.post)}>Delete</Button>
        </div>
      </div>
    </div>
  )
}
