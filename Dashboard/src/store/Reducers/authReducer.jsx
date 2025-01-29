import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
import { jwtDecode } from "jwt-decode";

const INITIAL_STATE = {
    successMessage: '',
    errorMessage: '',
    userInfoToken: localStorage.getItem('accessToken'),
    userInfo: {},
    role: returnRole(localStorage.getItem('accessToken')),
    loader: false
}

export const admin_login = createAsyncThunk('AUTH/admin_login', async (info, thunkAPI) => {
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

export const seller_register = createAsyncThunk('AUTH/seller_register', async(info, thunkAPI) => {
    try {
        const res = await api.post('/seller-register', info, {withCredentials: true});
        console.log(res.data);
        return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

export const seller_login = createAsyncThunk('AUTH/seller_login', async(info, thunkAPI) => {
    try {
        const res = await api.post('/seller-login', info, {withCredentials: true});
        console.log(res.data);
        localStorage.setItem('accessToken', res.data.token);
        return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
})

export const get_user = createAsyncThunk('AUTH/get_user', async(_,thunkAPI) => {
    try {
        const res = await api.get('/get-user', {headers: {token: localStorage.getItem('accessToken')}});
        return thunkAPI.fulfillWithValue(res.data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.message)
    }
})

function returnRole (token) {
    if (token) {
        const decode = jwtDecode(token);
        // console.log(decode);
        // const decodeDateExp = new Date(decode.exp);
        // if (new Date() > decodeDateExp) {
        //     localStorage.removeItem('accessToken');
        //     return '';
        // }else{
        //     return decode.role;
        // }
        return decode.role;
    }else{
        return '';
    }
}

export const authReducer = createSlice({
    name: 'AUTH',
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
            state.role = returnRole(action.payload.token);
        })

        builder.addCase(seller_register.pending, (state, action) => {
            state.loader = true;
        })
        builder.addCase(seller_register.rejected, (state, action) => {
            state.errorMessage = action.payload.message;
            state.loader = false;
        })
        builder.addCase(seller_register.fulfilled, (state, action) => {
            state.successMessage = action.payload.message;
            // console.log(action.payload.message);
            state.loader = false;
        })

        builder.addCase(seller_login.pending, (state, action) => {
            state.loader = true;
        })
        builder.addCase(seller_login.rejected, (state, action) => {
            state.errorMessage = action.payload.message;
            state.loader = false;
        })
        builder.addCase(seller_login.fulfilled, (state, action) => {
            state.successMessage = action.payload.message;
            // console.log(action.payload.message);
            state.userInfoToken = action.payload.token;
            state.role = returnRole(action.payload.token);
            state.loader = false;
        })

        builder.addCase(get_user.pending, (state, action) => {
            state.loader = true;
        })
        builder.addCase(get_user.rejected, (state, action) => {
            state.errorMessage = action.payload;
            state.loader = false;
        })
        builder.addCase(get_user.fulfilled, (state, action) => {
            state.successMessage = action.payload.message;
            state.userInfo = action.payload.data;
            // console.log(state.userInfo);
            state.loader = false;
        })
    }
})

export const {clearMessage} = authReducer.actions
export default authReducer.reducer;