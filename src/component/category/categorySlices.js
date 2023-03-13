import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_Category = "http://localhost:8585/api/category/all";
const POST_NEW_Category = "http://localhost:8585/api/category/create/";
const UPDATE_Category = "http://localhost:8585/api/category/update";
const DELETE_Category = "http://localhost:8585/api/category/id/";

export const fetchCategories= createAsyncThunk('categories/fetchCategories', async () => {
    const response = await axios.get(GET_ALL_Category);
    return response.data;
});

export const addNewCategory = createAsyncThunk('categories/addNewCategory', async(data)=>{
    const response = await axios.post(`${POST_NEW_Category}${data.inqueryId}`,data.category)
    return response.data;
})

export const updateCategory= createAsyncThunk('categories/updateCategory',async (data) => {
    const response = await axios.post(UPDATE_Category,data.category);
    return response.data
 })

 export const deleteCategory= createAsyncThunk('categories/deleteCategory', async (data) => {
    await axios.delete(`${DELETE_Category}${data.categoryId}`)
    const response = await axios.get(GET_ALL_Category);
    return response.data
});

const initialState = {
    categories: [],
    status: 'idle',
    error: null
}
export const categorySlice = createSlice({
    
    name: "apppointments",
    initialState,
    reducers: {
        addCategory: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare( id,name, consultantFees, clientStatus,lawyerStatus,date,time) {
                return {
                    payload:{
                        id,
                        name, 
                        consultantFees, 
                        clientStatus,
                        lawyerStatus,
                        date,
                        time,
                    }
                }
            },
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCategories.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.categories = action.payload
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed'

                state.error = action.error.message
            })
            .addCase(addNewCategory.fulfilled,(state,action)=>{
                state.categories.push(action.payload)
            })
            .addCase(updateCategory.fulfilled, (state, action) => {

                const category = action.payload
                

                const categories = state.categories.filter(app => app.id !== category.id)

                state.categories = [category, ...categories]


            })
            .addCase(deleteCategory.fulfilled,(state,action)=>{
                // const categories = state.categories.filter(app => app.id !== Number(action.payload))
        
                // state.categories = categories
                state.status = 'succeeded';
                state.categories = action.payload
            })
    }
});

export const selectAllCategory = (state) => state.categories.categories
export const getCategoryStatus = (state) => state.categories.status
export const getCategoryError = (state) => state.categories.error
export const selectCategoryById = (state, categoryId) => state.categories.categories.find(category => category.id === categoryId)
export const selectCategoryByName = (state,searchValue)=>(searchValue==="")?state.categories.categories:state.categories.categories.filter(category=> category.name.toLowerCase().includes(searchValue.toLowerCase()))


export const { addCategory} = categorySlice.actions;

export default categorySlice.reducer