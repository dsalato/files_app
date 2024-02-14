import {configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import userReducer from './slices/userSlice';
import folderReducer from './slices/folderSlice';
import fileReducer from './slices/fileSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        folder: folderReducer,
        file: fileReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector