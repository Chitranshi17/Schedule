import axios from "axios";
const API_URL = "https://listtimes.onrender.com";

export const fetchTodos = async() => {
    const response = await axios.get(API_URL + '/api/todo/');
    // console.log(response.data)
    return response.data;
};

export const saveTodo = async(formData) => {
    const response = await axios.post(API_URL + '/api/todo/', formData)
    return response.data;
}

export const deleteTodo = async(id) => {
    const response = await axios.delete(API_URL + '/api/todo/' + id )
    return response.data;
}

export const updateTodoDB = async(todo) => {
    // console.log(todo) 
    const response = await axios.put(API_URL + "/api/todo/" + todo._id , 
    {title : todo.title , description : todo.description}
    )
    // console.log(response.data)
    return response.data;
}