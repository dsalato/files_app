import {createSlice} from '@reduxjs/toolkit'

type FileState = {
    files: {
        name: string,
        filepath: string
    },
    activeModalFile: boolean,
    activeModalDeleteFile: boolean;
    deleteFileId: string;
}

const initialState: FileState = {
    files: {
        name: '',
        filepath: ''
    },
    activeModalFile: false,
    activeModalDeleteFile: false,
    deleteFileId: '',
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
        setActiveModalDeleteFile: (state) => {
            state.activeModalDeleteFile = !state.activeModalDeleteFile;
        },
        setDeleteFileId: (state, action) => {
            state.deleteFileId = action.payload;
        },
    },
})

export const {setName, setActiveModalFile, setActiveModalDeleteFile, setDeleteFileId} = fileSlice.actions

export default fileSlice.reducer