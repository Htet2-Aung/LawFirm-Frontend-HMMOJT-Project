import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


import axios from "axios";


const GET_ALL_PAYMENT= 'http://localhost:8585/api/payment/all';
const POST_NEW_PAYMENT= 'http://localhost:8585/api/payment/create/';
//const UPDATE_CATEGORY = 'http://localhost:8383/api/category/update/'
const DELETE_PAYMENT = 'http://localhost:8585/api/payment/id/';

export const fetchPayments = createAsyncThunk('payments/fetchPayments',async () =>{
    const response = await axios.get(GET_ALL_PAYMENT);
    return response.data;
 });

 export const addNewPayment = createAsyncThunk('payments/addNewPayment',async (data) => {
    const response = await axios.post(`${POST_NEW_PAYMENT}${data.contractId}`,data.payment);
    return response.data
 })

 export const updatePayment = createAsyncThunk('payments/updatePayment',async (data) => {
    const response = await axios.post(POST_NEW_PAYMENT,data.payment);
    return response.data
 })

// export const updateCategory = createAsyncThunk('categories/updateCategory',async (categoryId) => {
//     const response = await axios.post(`${UPDATE_CATEGORY}${categoryId}`);
//     return response.data
//  })

 export const deletePayment = createAsyncThunk('payments/deletePayment',async (paymentId) => {
    const response = await axios.delete(`${DELETE_PAYMENT}${paymentId}`);
    return response.data
 })


const initialState = {
    payments : [],
    status :'idle',
    error : null

}
export const paymentSlice = createSlice({
    name:'payments',
    initialState,
    reducers:{
        addPayment:{
            reducer(state,action){
                state.push(action.payload)

    },
    prepare(cardNumber,expireDate,cvc,holderName,totalCost){
        return{
         payload:{
            
            cardNumber,
            expireDate,
            cvc,
            holderName,
            totalCost

        }
    };

    },
}
},
extraReducers(builder){
    builder
        .addCase(fetchPayments.pending,(state,action)=>{
            state.status = 'loading';
        })
        .addCase(fetchPayments.fulfilled,(state,action)=>{
            state.status = 'succeeded';

            //state.categories = state.categories.concat(action.payload);
            state.payments = action.payload
        })
        .addCase(fetchPayments.rejected,(state,action)=>{
            state.status = 'failed';

            state.error = action.error.message;
        })
        .addCase(addNewPayment.fulfilled,(state,action)=>{
            
            state.payments.push(action.payload)
        })
       
        .addCase(updatePayment.fulfilled,(state,action)=>{
            const payment = action.payload
            const payments = state.payments.filter(c => c.id !== payment.id )
            state.payments= [...payments,payment]
    })
    .addCase(deletePayment.fulfilled,(state,action)=>{
        const payments = state.payments.filter(c => c.id !== Number(action.payload))

        state.payments = payments

    })


}
});

export const selectAllPayments = (state) => state.payments.payments;
export const getPaymentStatus = (state) => state.payments.status
export const getPaymentError = (state) => state.payments.error

//for update
export const selectPaymentById = (state,paymentId) => state.payments.payments.find(payment => payment.id === paymentId)

export const selectPaymentByUsername = (state, email) => state.payments.payments.filter(payment => payment.username === email)
export const selectPaymentByLawyerName = (state, email) => state.payments.payments.filter(payment => payment.lawyerName === email)


export const { addPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
