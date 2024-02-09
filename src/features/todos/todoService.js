import axios from "axios";

export const fetchTodos = async() => {
    const response = await axios.get("/api/todo");
    // console.log(response.data)
    return response.data;
};

export const saveTodo = async(formData) => {
    const response = await axios.post("/api/todo", formData)
    return response.data;
}

export const deleteTodo = async(_id) => {
    const response = await axios.delete("/api/todo/" + _id )
    return response.data;
}

export const updateTodoDB = async(todo) => {
    // console.log(todo) 
    const response = await axios.put("/api/todo/" + todo._id , 
    {title : todo.title , description : todo.description}
    )
    // console.log(response.data)
    return response.data;
}