import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const response = await axios.get('http://localhost:3005/users');
    console.log("data",response.data);
    return response.data
});

export  {fetchUsers};