import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_INQUERY = "http://localhost:8585/api/inquery/all";
const GET_ALL_INQUERYAdmin = "http://localhost:8585/api/inquery/all1";
const POST_NEW_INQUERY = "http://localhost:8585/api/inquery/create";
const POST_UPDATE_INQUERY = "http://localhost:8585/api/inquery/update";
const DELETE_INQUERY = "http://localhost:8585/api/inquery/id/";

export const fetchInquery = createAsyncThunk('inquerys/fetchInquery', async (token)=>{
    console.log("In the Appointment Slice FetchAppointment Token:"+token)
    const response = await axios.get(GET_ALL_INQUERY,{
        headers:{
            'Authorization':token,
        }
    });
    return response.data;
});

export const addNewInquery = createAsyncThunk('inquerys/addNewInquery', async (data)=>{
    console.log(data.token)
    const response = await axios.post(POST_NEW_INQUERY,data.inquery,{
        headers:{
           
            'Authorization':data.token
        }
    })
        return response.data;
})

export const updateInquery = createAsyncThunk('inquerys/updateInquery', async (data)=>{
    console.log("In the Inquery Update Slice:"+ data.inquery)
    console.log("In the Inquery Update Slice:"+ data.token)
    const response = await axios.post( POST_UPDATE_INQUERY,data.inquery,{
        headers:{
            
            'Authorization':data.token,
        },
    })
    return response.data
})

export const deleteInquery = createAsyncThunk('inquerys/deleteInquery', async (data)=>{
    await axios.delete(`${DELETE_INQUERY}${data.inqueryId}`,{
        headers:{
            'Authorization':data.token,
        }
    })
    console.log("In the delete"+data.token)
    const response = await axios.get(GET_ALL_INQUERY,{

        headers:{
            'Authorization':data.token,
        }
    });
    return response.data
})


// export const addNewProject = createAsyncThunk('inquerys/addNewInquery', async (data)=>{
//     console.log(data.token)
//     const response = await axios.post(POST_NEW_PROJECT,data.project,{
//         headers:{
//             'Content-Type':'application/json',
//             'Authorization':data.token,
//         },  
//     })
//     return response.data
// })

export const fetchInqueryAdmin = createAsyncThunk('inquerys/fetchInqueryAdmin', async () => {
    const response = await axios.get(GET_ALL_INQUERYAdmin);
    return response.data;
});

// export const addNewInquery = createAsyncThunk('inquerys/addNewInquery', async(data)=>{
// console.log(data.inquery)
//     const response = await axios.post(`${POST_NEW_INQUERY}${data.userId}`,data.inquery)
//     return response.data;
// })

// export const updateInquery= createAsyncThunk('inquerys/updateInquery',async (data) => {
//     const response = await axios.post(POST_NEW_INQUERY,data);
//     return response.data
//  })

//  export const deleteInquery = createAsyncThunk('inquerys/deleteInquery', async (data) => {
//     await axios.delete(`${DELETE_INQUERY}${data.inqueryId}`)
//     const response = await axios.get(GET_ALL_INQUERY);
     
//     return response.data
// });

const initialState = {
    inquerys: [],
    status: 'idle',
    error: null
}
export const inquerySlice = createSlice({
    
    name: "inquerys",
    initialState,
    reducers: {
        addInquery: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare( id,phoneNo, lawyerName, description,username) {
                return {
                    payload:{
                        id,
                        phoneNo,
                        lawyerName,
                        description,
                        username
                    }
                }
            },
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchInquery.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchInquery.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.inquerys = action.payload
            })
            .addCase(fetchInquery.rejected, (state, action) => {
                state.status = 'failed'

                state.error = action.error.message
            })
            .addCase(fetchInqueryAdmin.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchInqueryAdmin.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // state.status = 'idle'
                state.inquerys = action.payload
                console.log("Inquery Slice Admin Inquery"+state.inquerys)
            })
            .addCase(fetchInqueryAdmin.rejected, (state, action) => {
                state.status = 'failed'

                state.error = action.error.message
            })
            .addCase(addNewInquery.fulfilled,(state,action)=>{
                state.inquerys.push(action.payload)
            })
            .addCase(updateInquery.fulfilled, (state, action) => {

                const inquery = action.payload
                
                
                const inquerys = state.inquerys.filter(inq => inq.id !== inquery.id)

                state.inquerys = [inquery, ...inquerys]


            })
            // .addCase(deleteInquery.fulfilled,(state,action)=>{
            //     const inquerys = state.inquerys.filter(inq => inq.id !== Number(action.payload))
        
            //     state.inquerys = inquerys
        
            // })
            .addCase(deleteInquery.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.inquerys = action.payload
            })
    }
});

export const selectAllInquery = (state) => state.inquerys.inquerys
export const getInqueryStatus = (state) => state.inquerys.status
export const getInqueryError = (state) => state.inquerys.error
export const selectInqueryById = (state, inqueryId) => state.inquerys.inquerys.find(inquery => inquery.id === inqueryId)
export const selectInqueryByStatus = (state, appStatus) => state.inquerys.inquerys.filter(inquery => inquery.appointmentStatus === appStatus)
export const selectInqueryByUsername = (state, email) => state.inquerys.inquerys.filter(inquery => inquery.username === email)
export const selectInqueryByLawyerName = (state, email) => state.inquerys.inquerys.filter(inquery => inquery.lawyerName === email)
export const { addInquery} = inquerySlice.actions;

export default inquerySlice.reducer