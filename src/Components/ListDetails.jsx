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
      <ListItem className="listItem rounded-0">
        <Box sx={{ flexGrow: "1" }} className="d-flex align-items-start justify-content-around flex-column rounded-0">
          <Typography variant="h3" color={"white"} sx={{fontSize : "2.2rem", fontWeight :"bold"}}>Title : {todo.title}</Typography>
          <Typography variant="h4" color={"white"} sx={{fontSize : "1.8rem"}}>Description : {todo.description}</Typography>
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
