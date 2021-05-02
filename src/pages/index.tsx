import React, { useState } from "react"
import NavBar from "../Components/Navbar"
import { Jumbotron, Button } from "react-bootstrap"
import { Field, Form, Formik } from "formik"
import * as Yup from "yup"
import { TextField } from "@material-ui/core"

interface postValues {
  title: string
  description: string
}

export default function Home() {

  const [title , setTitle] = useState('')
  const [description , setDescription] = useState('')

  const handleSubmit = async () => {
    const newPost : postValues ={
      title,
      description
    }

    console.log(newPost);
    
    setTitle('')
    setDescription('')
    
  }

  

  return (
    <div>
      <NavBar />
      <Jumbotron className="home-input">
        <h1>Write words that inspire</h1>
        <TextField
        fullWidth
          label='Title'
          variant='outlined'
          color='primary'
          style={{margin: '15px 0'}}
          value={title}
          onChange={(e) => setTitle(e.target.value) }
        />
        <TextField
        fullWidth
          label='Description'
          variant='outlined'
          color='primary'
          style={{margin: '15px 0'}}
          value={description}
          onChange={(e) => setDescription(e.target.value) }
        />
        <Button variant='success' onClick={handleSubmit} >Post</Button>
      </Jumbotron>
    </div>
  )
}
