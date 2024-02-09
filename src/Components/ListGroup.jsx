import React, { useEffect } from 'react'
import ListDetails from './ListDetails'
import { Box, CircularProgress, List, Stack} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import { getAllTodos } from '../features/todos/todoSlice'


const ListGroup = () => {

  const dispatch = useDispatch();

  const {allTodos, isLoading , isError , isSuccess} = useSelector(state => state.todos)

  useEffect(()=> {
    dispatch(getAllTodos());
  }, [])

  
  if(allTodos.length === 0){
    return(
      <div className="loading-container">
      <h5 style={{fontSize : '3rem'}}>Todo Not Here Yet.</h5>
      </div>
    )
  }

  if(isLoading){
    return(
              <CircularProgress color="secondary" sx={{marginTop : "10rem"}}/>
    )
  }

  if(isError){
    return(
      <div className="loading-container m-5">
      <h5 style={{fontSize : '3rem', color : "red"}}>Something Went Wrong...</h5>
    </div>
    )
  }

  
  
  return (
    <div className="parent-list-group">
      <div className="list-group rounded-0">
    <List >
{
  allTodos.map(todo => <ListDetails key={todo._id} todo={todo}/>)
}   
    </List>
   </div>
    </div>
  )
}

export default ListGroup
