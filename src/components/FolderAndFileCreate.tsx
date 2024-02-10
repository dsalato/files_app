import React from 'react';
import Modal from "./folder/Modal";
import {setActiveModal} from "../redux/slices/folderSlice";
import {useAppDispatch} from "../redux/store";


const FolderAndFileCreate: React.FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div className=''>
            <div className='flex justify-center'>
                <button className='bg-yellow-400 py-4 px-2 rounded mx-2 hover:bg-yellow-200' onClick={()=>{dispatch(setActiveModal())}}>Создать папку</button>
                <button className='bg-yellow-400 py-4 px-2 rounded mx-2 hover:bg-yellow-200'>Создать файл</button>
            </div>
            <Modal/>
        </div>
    );
};

export default FolderAndFileCreate;
