import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteTodo, fetchTodos, saveTodo, updateTodoDB } from "./todoService";

const todoSlice = createSlice(
    {
        name : "todos",
        
        // {_id : 1, title : "title Here By Redux" , description : "description Here By Redux"}

        initialState : {
            allTodos : [ {_id : 1, title : "title Here By Redux" , description : "description Here By Redux"}] ,
            isLoading : false,
            isSuccess : false,
            isError : false,
            edit : {todo : {}, isEdit : false}
        },
        reducers : {
            removeFromState : (state, action) => {
                return{
                    ...state,
                    allTodos : state.allTodos.filter(todo => todo._id !== action.payload)
                }
            },
            editInState : (state , action) => {
                return {
                    ...state,
                    edit : {todo : action.payload, isEdit : true},
                }
            }
        },
        extraReducers : (builder) => {
            builder 
            .addCase(getAllTodos.pending, state => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(getAllTodos.fulfilled , (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.allTodos = action.payload
            })
            .addCase(getAllTodos.rejected , state => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
            })
            .addCase(addTodo.pending, state => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(addTodo.fulfilled , (state, action) => {
                state.isLoading = false
                state.isError = false
                state.allTodos = [action.payload, ...state.allTodos]
            })
            .addCase(addTodo.rejected , state => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
            })
            .addCase(removeTodo.pending, state => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(removeTodo.fulfilled , (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
            })
            .addCase(removeTodo.rejected , state => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
            })
            
            .addCase(updateTodo.pending, state => {
                state.isLoading = true
                state.isError = false
            })
            .addCase(updateTodo.fulfilled , (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.allTodos = state.allTodos.map(item => item._id === action.payload._id ? action.payload : item)
                state.edit = {todo : {} , isEdit : false}
            })
            .addCase(updateTodo.rejected , state => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
            })
            
        },
    }
);

export const {removeFromState , editInState} = todoSlice.actions;

export default todoSlice.reducer;



// Get All TODOS BY API

export const getAllTodos = createAsyncThunk("FETCH/TODOS", async() => {
    try {
        return await fetchTodos();
    } catch (error) {
        console.log(error.message);
        // console.log("Toddo Not");
    }
})


// ADD TODO

export const addTodo = createAsyncThunk("ADD/TODO" , async(formData) => {
    try {
        return await saveTodo(formData)
    } catch (error) {
        console.log(error.message)
    }
})

// DELETE TODO

export const removeTodo = createAsyncThunk("REMOVE/TODO", async(id) => {
    console.log(id)
    deleteTodo(id)
}) 

// Update TODO

export const updateTodo = createAsyncThunk("UPDATE/TODO", async(todo) => {
    try {
        return await updateTodoDB(todo);
    } catch (error) {
        console.log(error.message)
    }
})