import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_USER = "http://localhost:8585/api/user/all";
// const GET_USER="http://localhost:8585/api/user/all"
const POST_NEW_LAWYER = "http://localhost:8585/api/user/createLawyer";
const POST_NEW_USER = "http://localhost:8585/api/user/createUser";
const UPDATE_USER = "http://localhost:8585/api/user/updateUser";
const UPDATE_Lawyer = "http://localhost:8585/api/user/updateLawyer";
const DELETE_USER = "http://localhost:8585/api/user/id/";



// export const fetchUserBYID = createAsyncThunk('users/fetchUser', async (token) => {
//     const response = await axios.get(GET_ALL_USER,{
//         headers:{
//             'Authorization':token,
//         }
//     });
//     return response.data;
// });

export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
    const response = await axios.get(GET_ALL_USER)

    return response.data;
});

export const addNewLawyer = createAsyncThunk('users/addNewLawyer', async (data) => {
    const response = await axios.post(POST_NEW_LAWYER, data.lawyer)
    return response.data;
})
export const addNewUser = createAsyncThunk('users/addNewUser', async (data) => {
    const response = await axios.post(POST_NEW_USER, data.user)
    return response.data;
})

export const updateUser = createAsyncThunk('users/updateUser', async (data) => {
    // const response = await axios.post(UPDATE_USER, data.user);
   await axios.post(UPDATE_USER, data.user);
   const response = await axios.get(GET_ALL_USER);

    return response.data
})
export const updateLawyer = createAsyncThunk('users/updateLawyer', async (data) => {
    const response = await axios.post(UPDATE_Lawyer, data.user);
    return response.data
})

export const deleteUser = createAsyncThunk('users/deleteUser', async (data) => {
    await axios.delete(`${DELETE_USER}${data.userId}`)
    const response = await axios.get(GET_ALL_USER);

    return response.data
});

const initialState = {
    users: [],
    status: 'idle',
    error: null
}
export const userSlice = createSlice({

    name: "users",
    initialState,
    reducers: {
        adduser: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(id, firstName, middleName, lastName, address, cost, nrc, phoneNo, statuss, accountName,
                role, username, password, gender, description, certificate,imageURL, field, licenseNo, licenseExpireDate,confirmPassword) {
                return {
                    payload: {
                        id,
                        firstName,
                        middleName,
                        lastName,
                        address,
                        gender,
                        cost,
                        nrc,
                        imageURL,
                        phoneNo,
                        statuss,
                        accountName,
                        role,
                        username,
                        password,
                        description,
                        certificate,
                        field,
                        licenseNo,
                        licenseExpireDate,
                        confirmPassword
                    }
                }
            },
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUser.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.users = action.payload
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = 'failed'

                state.error = action.error.message
            })
            .addCase(addNewLawyer.fulfilled, (state, action) => {
                state.users.push(action.payload)
            })
            .addCase(addNewUser.fulfilled, (state, action) => {
                state.users.push(action.payload)
            })
            .addCase(updateUser.fulfilled, (state, action) => {

                state.status = 'succeeded';
                state.users = action.payload


                // const users = state.users.filter(us => us.id !== user.id)

                // state.users = [user, ...users]


            })
            .addCase(updateLawyer.fulfilled, (state, action) => {

                const lawyer = action.payload


                const lawyers = state.users.filter(us => us.id !== lawyer.id)

                state.users = [lawyer, ...lawyers]


            })
            // .addCase(deleteuser.fulfilled,(state,action)=>{
            //     const users = state.users.filter(inq => inq.id !== Number(action.payload))

            //     state.users = users

            // })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload
            })

            // .addCase(fetchUserBYID.fulfilled, (state, action) => {
            //     state.status = 'succeeded'
            //     state.users = action.payload
            // })
    }
});

export const selectAllUser = (state) => state.users.users
export const getUserStatus = (state) => state.users.status
export const getUserError = (state) => state.users.error
export const selectUserById = (state, userId) => state.users.users.find(user => user.id === userId)
export const selectLawyerByRole = (state) => state.users.users.filter(user => user.role === "Lawyer")
export const selectUserByEmail = (state,email) => state.users.users.find(user => user.username === email)


export const { addUser } = userSlice.actions;

export default userSlice.reducer