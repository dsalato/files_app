import {createSlice} from '@reduxjs/toolkit'

type FolderType = {
    id: string,
    name: string,
    type: string
}

type FolderState = {
    activeModal: boolean;
    folders: {
        id: string,
        name: string,
        children: FolderType[]
    };
    folderName: string;

}

const initialState: FolderState = {
    activeModal: false,
    folders: {
        id: '',
        name: '',
        children: []
    },
    folderName: '',

};

export const folderSlice = createSlice({
    name: 'folder',
    initialState,
    reducers: {
        setActiveModal: (state) => {
            state.activeModal = !state.activeModal;
            state.folderName = '';
        },
        setName: (state, action) =>{
            state.folderName = action.payload;
        },
        setFolder: (state, action) => {
            state.folders = action.payload;
        }


    },

})

export const {setActiveModal, setName, setFolder} = folderSlice.actions


export default folderSlice.reducer