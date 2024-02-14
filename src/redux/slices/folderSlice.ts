import {createSlice} from '@reduxjs/toolkit'
import {FileType, FolderType} from "../../types/types";

type FolderState = {
    activeModal: boolean;
    activeModalMove: boolean;
    activeModalDeleteFolder: boolean;
    folders: {
        id: string,
        name: string,
        children: (FolderType | FileType)[]
    };
    folderName: string;
    editingFolderId: string;
    movingFolderId: string;
    deleteFolderId: string;

}

const initialState: FolderState = {
    activeModal: false,
    activeModalMove: false,
    activeModalDeleteFolder: false,
    folders: {
        id: '',
        name: '',
        children: []
    },
    folderName: '',
    editingFolderId: '',
    movingFolderId: '',
    deleteFolderId: '',

};

export const folderSlice = createSlice({
    name: 'folder',
    initialState,
    reducers: {
        setActiveModal: (state) => {
            state.activeModal = !state.activeModal;
            state.folderName = '';
        },
        setActiveModalMove: (state) => {
            state.activeModalMove = !state.activeModalMove;
        },
        setActiveModalDeleteFolder: (state) => {
            state.activeModalDeleteFolder = !state.activeModalDeleteFolder;
        },
        setName: (state, action) => {
            state.folderName = action.payload;
        },
        setFolderId: (state, action) => {
            state.folders.id = action.payload;
        },
        setFolderName: (state, action) => {
            state.folders.name = action.payload;
        },
        setFolder: (state, action) => {
            state.folders = action.payload;
        },
        setEditingFolderId: (state, action) => {
            state.editingFolderId = action.payload;
        },
        setMovingFolderId: (state, action) => {
            state.movingFolderId = action.payload;
        },
        setDeleteFolderId: (state, action) => {
            state.deleteFolderId = action.payload;
        },


    },
})

export const {
    setActiveModal,
    setActiveModalMove,
    setActiveModalDeleteFolder,
    setName,
    setFolderId,
    setFolderName,
    setFolder,
    setEditingFolderId,
    setMovingFolderId,
    setDeleteFolderId
} = folderSlice.actions


export default folderSlice.reducer