import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {User} from "../../types/types";

type UserState = {
    isAuth: boolean,
    token: User | null,
    typeOfForm: boolean,
    login: string,
    password: string,
}

const initialState: UserState = {
    isAuth: false,
    token: null,
    typeOfForm: false,
    login: '',
    password: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authLogin: (state, action: PayloadAction<User>) => {
            state.token = action.payload;
            state.isAuth = true;
        },
        logout: (state) => {
            state.token = null;
            state.isAuth = false;
        },
        changeTypeOfForm: (state, action: PayloadAction<boolean>) => {
            state.typeOfForm = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setLogin: (state, action) => {
            state.login = action.payload;
        }

    },
})

export const {authLogin, logout, changeTypeOfForm, setLogin, setPassword} = userSlice.actions


export default userSlice.reducer