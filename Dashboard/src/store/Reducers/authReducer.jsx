import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const INITIAL_STATE = {
    successMessage: '',
    errorMessage: '',
    userInfoToken: '',
    loader: false
}

export const admin_login = createAsyncThunk('authReducer/admin_login', async (info, thunkAPI) => {
    // console.log(info);
    // console.log(thunkAPI);
    try {
        const response = await api.post('/admin-login', info,
            {withCredentials: true}
        )
        console.log(response.data)
        localStorage.setItem('accessToken', response.data.token);

        return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
        console.log(error.response.data)
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

export const authReducer = createSlice({
    name: 'authReducer',
    initialState: INITIAL_STATE,
    reducers: {
        clearMessage: (state,) => {
            state.errorMessage = '';
            state.successMessage = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(admin_login.pending, (state, action) => {
            state.loader = true;
        })
        builder.addCase(admin_login.rejected, (state, action) => {
            state.errorMessage = action.payload.message;
            state.loader = false;
        })
        builder.addCase(admin_login.fulfilled, (state, action) => {
            // state.userInfo = action.payload;
            state.successMessage = action.payload.message
            state.userInfoToken = action.payload.token;
            state.loader = false;
        })
    }
})

export const {clearMessage} = authReducer.actions
export default authReducer.reducer;