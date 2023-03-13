import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const POST_NEW_COURT = 'http://localhost:8585/api/court/create/';
const GET_ALL_COURT = 'http://localhost:8585/api/court/all';
const DELETE_COURT = 'http://localhost:8585/api/court/id/';
const POST_UPDATE_COURT ='http://localhost:8585/api/court/update';


export const fetchCourts = createAsyncThunk('court/fetchCourts', async ()=>{
    const response = await axios.get(GET_ALL_COURT)
    return response.data;
});

export const addNewCourt = createAsyncThunk('court/addNewCourt', async (data)=>{
    
    const response = await axios.post(`${POST_NEW_COURT}${data.conId}`,data.court)
    return response.data
});

export const updateCourt = createAsyncThunk('court/addUpdateCourt', async (data)=>{
    const response = await axios.post(POST_UPDATE_COURT,data.court)
    return response.data
});

export const deleteCourt = createAsyncThunk('courts/deleteCourt', async (data)=>{
    await axios.delete(`${DELETE_COURT }${data.courtId}`)
    const response = await axios.get(GET_ALL_COURT)
    return response.data
});

const initialState = {
    courts:[],
    status:'idle',
    error: null
}

export const courtSlice = createSlice({
    name:'courts',
    initialState,
    reducers:{
        addCourt:{
            reducer(state,action){
                state.push(action.payload);
            },
            prepare(id,conDescription,contractDate){
               return {
                payload:{
                    id,
                    conDescription,
                    contractDate
                    
                }
            };           
                   
            }, 
              
    }
    },
    extraReducers(builder){
        builder
        .addCase(fetchCourts.pending,(state,action)=>{
            state.status = 'loading';
        })
        .addCase(fetchCourts.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            //state.contracts = state.contracts.concat(action.payload);
            state.courts = action.payload
        })
        .addCase(fetchCourts.rejected,(state,action)=>{
            state.status = 'failed';

            state.error = action.error.message;
        })
            .addCase(addNewCourt.fulfilled,(state,action)=>{
                state.courts.push(action.payload)
            })
            .addCase(updateCourt.fulfilled,(state,action)=>{
                const courtLaw = action.payload

                const courts = state.courts.filter(p => p.courtId !== courtLaw.courtId)

                state.courts = [courtLaw,...courts]              


            })
            .addCase(deleteCourt.fulfilled,(state,action)=>{
                //console.log(action.payload)
                //const contracts = state.contracts.filter(p => p.contractId !== String(action.payload))

                //state.contracts = contracts
                state.status = 'succeeded';
            //state.contracts = state.contracts.concat(action.payload);
            state.courts = action.payload
            })
            
    }
    
});


export const selectAllCourt = (state)=>state.courts.courts;
export const getCourtStatus =  (state)=>state.courts.courts;
export const getCourtError =  (state)=>state.courts.error;
export const selectCourtById = (state,courtId)=> state.courts.courts.find(c => c.id === courtId)
export const selectCourtsByNotCourtDefine =(state)=>state.contracts.contracts.filter(contract=> contract.courtId===(undefined))
export const selectCourtsByCourtDefine =(state)=>state.contracts.contracts.filter(contract=> contract.courtId!==(undefined))


export const { addCourt } = courtSlice.actions;
export default courtSlice.reducer;

