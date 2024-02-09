import { Box, Divider, Fab, ListItem, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editInState, removeFromState, removeTodo } from "../features/todos/todoSlice";

const ListDetails = ({todo}) => {
  const dispatch = useDispatch();

  const {isSuccess} = useSelector(state => state.todos)

  const handleDelete = (id) => {
    dispatch(removeTodo(id))
    if(isSuccess){
      dispatch(removeFromState(id))
    }
  }

  const handleEdit = (todo) => {
    dispatch(editInState(todo))
  }


  return (
    <>
      <ListItem className="listItem">
        <Box sx={{ flexGrow: "1" }} className="d-flex align-items-start justify-content-around flex-column">
          <Typography variant="h5" color={"white"}>Title : {todo.title}</Typography>
          <Typography variant="h6" color={"white"}>Description : {todo.description}</Typography>
        </Box>
        <Box className="d-flex align-items-center justify-content-around btn-design">
          <Fab color="secondary" aria-label="edit" sx={{width:'4rem', height:'4rem'}}
          onClick={()=>handleEdit(todo)}>
            <EditIcon />
          </Fab>
          <Fab color="primary" aria-label="add" sx={{width:'4rem', height:'4rem'}}
          onClick={()=>handleDelete(todo._id)}
          >
            <DeleteIcon />
          </Fab>
        </Box>
      </ListItem>
      <Divider />
    </>
  );
};

export default ListDetails;
