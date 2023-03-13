import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const LOGIN_URL = 'http://localhost:8585/api/user/login'

export const login = createAsyncThunk('auth/login',async (loginRequest)=>{
    const response = await axios.post(LOGIN_URL,loginRequest)
    return response.data
})

export const logout = (state) => {
    //localStorage.clear();
    state.user={};
    state.token='';
}

const initialState = {
    user:{},
    success:false,
    token:'',
    error:''
}

export const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder
            .addCase(login.fulfilled,(state,action)=>{
                console.log(action.payload)
                
                const jwtResponse = action.payload
                state.success = jwtResponse.success
                state.token = jwtResponse.token
                state.user = jwtResponse.user
                state.error='success'
             
            })
            .addCase(login.rejected,(state,action)=>{

                state.error='*Invalid username or password'
                console.log("state.error is :"+state.error)
                console.log("*Invalid username or password")                
             
            })
    }
})

export const getToken = state => state.auths.token
export const getUser = state => state.auths.user
export const getError = state=> state.auths.error



export default authSlice.reducer