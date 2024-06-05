import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TAuthState, TLoginState } from '../../types/types';
import axiosCrm from '../../config/axios.config';

const authState = {}

export const createNewUser = createAsyncThunk(
    'authSlice/createNewUser',
    async (formData: TAuthState) => {
        const response = await axiosCrm.post('/users/register/', formData);
        console.log(response, authState);
        return response;
    }
)

export const signInUser = createAsyncThunk(
    'authSlice/signInUser',
    async (loginData: TLoginState) => {
        const response = await axiosCrm.post('/users/login/', loginData);
        console.log(response);
        return response;
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: authState,
    reducers: {},
})

export default authSlice.reducer;
