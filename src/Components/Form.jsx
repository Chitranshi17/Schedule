import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from '../features/todos/todoSlice';

const Form = () => {

  const {edit} = useSelector(state => state.todos)

  const dispatch = useDispatch();

  const [formData , setFormData] = useState({
    title : "",
    description : "",
  })
  
  const handleChange = (e) => {
    setFormData(
      {
        ...formData,
        [e.target.name] : e.target.value
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit.isEdit){
      dispatch(updateTodo({
        _id : edit.todo._id,
        title, 
        description,
      }))
    }else{
      dispatch(addTodo(formData))
    }
    setFormData(
      {
        title : "",
        description : ""
      }
    )
  }

  useEffect(()=> {
    setFormData(
     {
      title : edit.todo.title,
      description : edit.todo.description,
     }
    )
  }, [edit])

  const {title , description} = formData;

  return (
    <>
      <form
          action=""
          className=" d-flex align-items-center justify-content-around flex-column form-control rounded-0 form"
          onSubmit={handleSubmit}
        >
          <TextField
            className="form-control rounded-0"
            label="Title Here"
            id="filled-basic"
            variant="filled"
            placeholder="Enter Title Here"
            sx={{padding :'.5rem'}}
            onChange={handleChange}
            value={title}
            name='title'
            required
          ></TextField>
          <TextField
            className="form-control rounded-0"
            label="Description Here"
            id="filled-basic"
            variant="filled"
            placeholder="Enter Title Here"
            rows={5}
            sx={{padding :'.5rem'}}
            multiline
            onChange={handleChange}
            value={description}
            name='description'
            required
          ></TextField>
          <Button
            variant="contained"
            type='submit'
            color="secondary"
            className="form-control p-3 fs-5 rounded-0"
            size="large"
            sx={{padding : "2rem" , color : "white" , fontWeight : "700"}}
          >
            Save
          </Button>
        </form>

    </>
  )
}

export default Form
