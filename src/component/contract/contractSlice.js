import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const POST_NEW_CONTRACT = 'http://localhost:8585/api/contract/create/';
const GET_ALL_CONTRACT = 'http://localhost:8585/api/contract/all';
const DELETE_CONTRACT = 'http://localhost:8585/api/contract/id/';
const POST_NEW_UpdateCONTRACT = 'http://localhost:8585/api/contract/update';


export const fetchContracts = createAsyncThunk('contract/fetchContracts', async ()=>{
    const response = await axios.get(GET_ALL_CONTRACT)
    return response.data;
});


export const addNewContract = createAsyncThunk('contract/addNewContract', async(data)=>{
    
    console.log("In the contract slice toke is"+data.token)
    console.log("In the contract slice appointment is"+data.contract)
    console.log("In the contract slice appointmet id is"+data.appointmentId)
    const response = await axios.post(`${POST_NEW_CONTRACT}${data.appointmentId}`,data.contract,{
        headers:{
            
        'Authorization':data.token,
    }
})
    return response.data;
})


export const updateContract = createAsyncThunk('contract/addUpdateContract', async (data)=>{
    const response = await axios.post(POST_NEW_UpdateCONTRACT,data.contract)
    return response.data
});

export const deleteContract = createAsyncThunk('contracts/deleteContracts', async (data)=>{
    await axios.delete(`${DELETE_CONTRACT }${data.contractId}`)
    const response = await axios.get(GET_ALL_CONTRACT)
    return response.data
});

const initialState = {
    contracts:[],
    status:'idle',
    error: null
}

export const contractSlice = createSlice({
    name:'contracts',
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
        .addCase(fetchContracts.pending,(state,action)=>{
            state.status = 'loading';
        })
        .addCase(fetchContracts.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            //state.contracts = state.contracts.concat(action.payload);
            state.contracts = action.payload
        })
        .addCase(fetchContracts.rejected,(state,action)=>{
            state.status = 'failed';

            state.error = action.error.message;
        })
            .addCase(addNewContract.fulfilled,(state,action)=>{
                state.contracts.push(action.payload)
            })
             .addCase(updateContract.fulfilled,(state,action)=>{
                const contract = action.payload

                const contracts = state.contracts.filter(p => p.contractId !== contract.contractId)

                state.contracts = [contract,...contracts]              


            })
            .addCase(deleteContract.fulfilled,(state,action)=>{
                //console.log(action.payload)
                //const contracts = state.contracts.filter(p => p.contractId !== String(action.payload))

                //state.contracts = contracts
                state.status = 'succeeded';
            //state.contracts = state.contracts.concat(action.payload);
            state.contracts = action.payload
            })
            
    }
    
});


export const selectAllContract = (state)=>state.contracts.contracts;
export const getContractStatus =  (state)=>state.contracts.status;
export const getContractError =  (state)=>state.contracts.error;
export const selectContractById = (state,contractId)=> state.contracts.contracts.find(contract => contract.id === contractId)
export const selectContractsByDes = (state,searchValue)=>(searchValue==="")?state.contracts.contracts:state.contracts.contracts.filter(contract=> contract.conDescription.toLowerCase().includes(searchValue.toLowerCase()))
export const selectContractsByCaseStatus = (state,searchStatus)=>state.contracts.contracts.filter(contract=> contract.caseCreated===(searchStatus))
export const selectContractsByUsername = (state,email)=>state.contracts.contracts.filter(contract=> contract.username===(email))
export const selectContractsByLawyerName = (state,email)=>state.contracts.contracts.filter(contract=> contract.lawyerName===(email))

export const { addContract } = contractSlice.actions;
export default contractSlice.reducer;

