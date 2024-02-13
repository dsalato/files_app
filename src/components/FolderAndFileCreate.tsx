import React from 'react';
import ModalFolder from "./modal/ModalFolder";
import {setActiveModal} from "../redux/slices/folderSlice";
import {useAppDispatch} from "../redux/store";
import {setActiveModalFile} from "../redux/slices/fileSlice";
import ModalFile from "./modal/ModalFile";
import ModalMove from "./modal/ModalMove";
import ModalDelete from "./modal/ModalDeleteFolder";
import ModalDeleteFolder from "./modal/ModalDeleteFolder";
import ModalDeleteFile from "./modal/ModalDeleteFile";


const FolderAndFileCreate: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div className=''>
            <div className='flex justify-center'>
                <button className='bg-yellow-400 py-4 px-2 rounded mx-2 hover:bg-yellow-200' onClick={()=>{dispatch(setActiveModal())}}>Создать папку</button>
                <button className='bg-yellow-400 py-4 px-2 rounded mx-2 hover:bg-yellow-200' onClick={()=>{dispatch(setActiveModalFile())}}>Создать файл</button>
            </div>
            <ModalFolder/>
            <ModalFile/>
            <ModalMove/>
            <ModalDeleteFolder/>
            <ModalDeleteFile/>

        </div>
    );
};

export default FolderAndFileCreate;
