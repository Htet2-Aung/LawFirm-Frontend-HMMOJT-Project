const initialState = {
    installments:[],
    status:'idle',
    error:null
}
export const installmentSlice = createSlice({
    name : "installments",
    initialState,
    reducers: {
        addInstallment: {
            reducer(state,action){
                state.push(action.payload);
            },
            prepare(id,name,amount,paidAmount){
                
            }
        }

    },
}

   
)