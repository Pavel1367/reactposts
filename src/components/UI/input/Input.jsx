import React from 'react'
import classes from './Input.module.css'
export default function Input(props) {
  return (
    <div>
      <input className={classes.myInp} {...props}/>
    </div>
  )
}
