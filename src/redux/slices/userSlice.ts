import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../redux/store'
import {User} from "../../types/types";

interface UserState {
    user: User | null,
    isAuth: boolean,
    typeOfForm: boolean
}

const initialState: UserState = {
    user: null,
    isAuth: false,
    typeOfForm: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authLogin: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuth = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuth = false;
        },
        changeTypeOfForm: (state, action: PayloadAction<boolean> ) => {
            state.typeOfForm = action.payload
        }

    },
})

export const {authLogin,logout,changeTypeOfForm} = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user

export default userSlice.reducer