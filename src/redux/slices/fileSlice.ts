import { createSlice } from '@reduxjs/toolkit'


interface FileState {
    files: {
        name: string,
        filepath: string
    },
    activeModalFile: boolean,
}

const initialState: FileState = {
    files: {
        name: '',
        filepath: ''
    },
    activeModalFile: false,
}


export const fileSlice = createSlice({
    name: 'file',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.files.name = action.payload;
        },
        setActiveModalFile: (state) => {
            state.activeModalFile = !state.activeModalFile;
        },
    },
})

export const {setName, setActiveModalFile} = fileSlice.actions


export default fileSlice.reducer