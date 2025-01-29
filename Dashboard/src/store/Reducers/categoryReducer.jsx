import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const INITIAL_STATE = {
    successMessage: '',
    errorMessage: '',
    loader: false,
    category: {},
    categories: [],
    categoriesLength: 0,
    getCategoriesLoader: false,
    deleteMessageSuccess: '',
    deleteMessageError: '',
}

export const addCategory = createAsyncThunk('CATEGORY/addCategory', async (data, thunkAPI) => {
    console.log(data);
    try {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('image', data.image);
        const response = await api.post('/add-category', formData, {headers: {token: localStorage.getItem('accessToken')}}, {withCredentials: true});
        
        return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const getCategories = createAsyncThunk('CATEGORY/getCategories', async ({page, limit, search}, thunkAPI) => {
    try {
        const response = await api.get(`/get-categories?page=${page}&&limit=${limit}&&search=${search}`, {headers: {token: localStorage.getItem('accessToken')}}, {withCredentials: true});
        // console.log(response.data);
        return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const deleteCategory = createAsyncThunk('CATEGORY/deleteCategory', async (categoryID, thunkAPI) => {
    try {
        // console.log(categoryID);
        
        const response = await api.get(`/delete-category/${categoryID}`, {headers: {token: localStorage.getItem('accessToken')}}, {withCredentials: true});
        // console.log(response);
        
        // console.log(response.data);
        return thunkAPI.fulfillWithValue(response.data)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

const categoryReducer = createSlice({
    name: "CATEGORY",
    initialState: INITIAL_STATE,
    reducers: {
        clearMessage: (state,) => {
            state.errorMessage = '';
            state.successMessage = '';
            state.deleteMessageError = '';
            state.deleteMessageSuccess = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addCategory.pending, (state, action) => {
            state.loader = true;
        })
        builder.addCase(addCategory.rejected, (state, action) => {
            state.errorMessage = action.payload.message;
            state.loader = false;
        })
        builder.addCase(addCategory.fulfilled, (state, action) => {
            state.successMessage = action.payload.message;
            state.loader = false;
        })


        builder.addCase(getCategories.pending, (state, action) => {
            state.getCategoriesLoader = true;
        })
        builder.addCase(getCategories.rejected, (state, action) => {
            state.errorMessage = action.payload.message;
            state.getCategoriesLoader = false;
        })
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload.data;
            state.categoriesLength = action.payload.meta_data.all_length
            state.getCategoriesLoader = false;
        })

        builder.addCase(deleteCategory.pending, (state, action) => {
            state.getCategoriesLoader = true;
        })
        builder.addCase(deleteCategory.rejected, (state, action) => {
            state.deleteMessageError = action.payload.message;
            state.getCategoriesLoader = false;
        })
        builder.addCase(deleteCategory.fulfilled, (state, action) => {
            state.deleteMessageSuccess = action.payload.message
            state.getCategoriesLoader = false;
        })
    }
});

export const {clearMessage} = categoryReducer.actions;
export default categoryReducer.reducer;