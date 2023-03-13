import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const POST_NEW_CASE = 'http://localhost:8585/api/case/create/';
const GET_ALL_CASE = 'http://localhost:8585/api/case/all';
const DELETE_CASE = 'http://localhost:8585/api/case/id/';
const POST_UPDATE_CASE='http://localhost:8585/api/case/update/';
const POST_CASE_COURT='http://localhost:8585/api/case/defineCourt/';


export const fetchCases = createAsyncThunk('case/fetchCases', async ()=>{
    const response = await axios.get(GET_ALL_CASE)
    return response.data;
});



export const addNewCase = createAsyncThunk('case/addNewCase', async (data)=>{
    ////conId,categoryId,courtId,token,lawCase
    console.log("In the cases slice , toke is "+ data.token)
    
    const response = await axios.post(`${POST_NEW_CASE}${data.conId}/${data.categoryId}/${data.courtId}`,
    data.lawCase,{
        headers:{            
            'Authorization':data.token,
        }
    })
    return response.data
});



export const defineCourtForCase= createAsyncThunk('case/defineCorut', async(data)=>{
    const response=await axios.post(`${POST_CASE_COURT}${data.caseId}/${data.courtId}`)
    
    return response.data
})

export const updateCase = createAsyncThunk('case/addUpdateCase', async (data)=>{
    const response =await axios.post(`${POST_UPDATE_CASE}${data.categoryId}/${data.courtId}`,data.lawCase)
    
    return response.data
});

export const deleteCase = createAsyncThunk('inquerys/deleteInquery', async (data)=>{
    console.log("In the delete case id is : "+ data.caseId)
    await axios.delete(`${DELETE_CASE}${data.caseId}`,{
        headers:{
            'Authorization':data.token,
        }
    })
    console.log("In the delete:::"+data.token)
    const response = await axios.get(GET_ALL_CASE);
    return response.data
})

const initialState = {
    cases:[],
    status:'idle',
    error: null
}

export const casesSlice = createSlice({
    name:'cases',
    initialState,
    reducers:{
        addCases:{
            reducer(state,action){
                state.push(action.payload);
            },
            prepare(id,caseTitle,description,caseStatus,attenCourtRoom,caseType,startDate,startTime,
                endDate,endTime){
               return {
                payload:{
                            id,
                            caseTitle,
                            description,
                            caseStatus,
                            attenCourtRoom,
                            caseType,
                            startDate,
                            startTime,
                            endDate,
                            endTime,
                            
                    
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
            .addCase(defineCourtForCase.fulfilled,(state,action)=>{
                const caseId = action.payload
                const caseLaw=selectCaseById(caseId)

                const cases = state.cases.filter(p => p.caseId !== caseLaw.caseId)

                state.cases = [caseLaw,...cases]                


            })
            
    }
    
});

export const getcourt=(state)=>state.cases.cases;
export const selectAllCase = (state)=>state.cases.cases;
export const getCaseStatus =  (state)=>state.cases.cases;
export const getCaseError =  (state)=>state.cases.error;
export const selectCaseById = (state,caseId)=> state.cases.cases.find(c => c.id === caseId)
export const selectCasesByUsername =(state,email)=>state.cases.cases.filter(c=> c.username===(email))
export const selectCasesByLawyername =(state,email)=>state.cases.cases.filter(c=> c.lawyerName===(email))


export const { addCase } = casesSlice.actions;
export default casesSlice.reducer;

