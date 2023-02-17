import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const POST_NEW_CASE = 'http://localhost:8585/api/case/create/';
const GET_ALL_CASE = 'http://localhost:8585/api/case/all';
const DELETE_CASE = 'http://localhost:8585/api/case/id/';
const POST_UPDATE_CASE='http://localhost:8585/api/case/update';


export const fetchCases = createAsyncThunk('case/fetchCases', async ()=>{
    const response = await axios.get(GET_ALL_CASE)
    return response.data;
});

export const addNewCase = createAsyncThunk('case/addNewCase', async (data)=>{
    
    const response = await axios.post(`${POST_NEW_CASE}${data.conId}`,data.lawCase)
    return response.data
});

export const updateCase = createAsyncThunk('case/addUpdateCase', async (data)=>{
    const response = await axios.post(POST_UPDATE_CASE,data.lawCase)
    return response.data
});

export const deleteCase = createAsyncThunk('cases/deleteCase', async (data)=>{
    await axios.delete(`${DELETE_CASE }${data.caseId}`)
    const response = await axios.get(GET_ALL_CASE)
    return response.data
});

const initialState = {
    cases:[],
    status:'idle',
    error: null
}

export const casesSlice = createSlice({
    name:'cases',
    initialState,
    reducers:{
        addContract:{
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
        .addCase(fetchCases.pending,(state,action)=>{
            state.status = 'loading';
        })
        .addCase(fetchCases.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            //state.contracts = state.contracts.concat(action.payload);
            state.cases = action.payload
        })
        .addCase(fetchCases.rejected,(state,action)=>{
            state.status = 'failed';

            state.error = action.error.message;
        })
            .addCase(addNewCase.fulfilled,(state,action)=>{
                state.cases.push(action.payload)
            })
            .addCase(updateCase.fulfilled,(state,action)=>{
                const caseLaw = action.payload

                const cases = state.cases.filter(p => p.caseId !== caseLaw.caseId)

                state.cases = [caseLaw,...cases]              


            })
            .addCase(deleteCase.fulfilled,(state,action)=>{
                //console.log(action.payload)
                //const contracts = state.contracts.filter(p => p.contractId !== String(action.payload))

                //state.contracts = contracts
                state.status = 'succeeded';
            //state.contracts = state.contracts.concat(action.payload);
            state.cases = action.payload
            })
            
    }
    
});


export const selectAllCase = (state)=>state.cases.cases;
export const getCaseStatus =  (state)=>state.cases.cases;
export const getCaseError =  (state)=>state.cases.error;
export const selectCaseById = (state,caseId)=> state.cases.cases.find(c => c.id === caseId)
export const { addCase } = casesSlice.actions;
export default casesSlice.reducer;

