import React from 'react';


import iconClose from '../../img/iconClose.png';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {FolderService} from "../../services/folder";
import {setActiveModalDeleteFile, setFolder} from "../../redux/slices/folderSlice";
import {toast} from "react-toastify";
import {FileService} from "../../services/file";


const ModalDeleteFile: React.FC = () => {
    const dispatch = useAppDispatch();
    const {activeModalDeleteFile,deleteFileId} = useAppSelector((state) => state.folder);
    const parentId = useAppSelector((state) => state.folder.folders.id);

    const onConfirmDelete = async () => {
        await FileService.deleteFile(deleteFileId);
        const {data} = await FolderService.viewFolder(parentId);
        dispatch(setFolder(data));
        toast.success('Файл успешно удален')
        dispatch(setActiveModalDeleteFile())

    }
    const onRequestClose = () => {
        dispatch(setActiveModalDeleteFile())
    }

    return (
        <div
            className={activeModalDeleteFile ? 'scale-1 h-[100vh] w-[100vw] bg-gray-700/45 fixed top-0 left-0 flex items-center justify-center duration-50' : 'hidden'}>
            <div className='p-5 rounded-xl bg-white h-[200px] w-[400px]' onClick={(e) => e.stopPropagation()}>
                <img src={iconClose} className='w-[20px] h-[20px] float-right cursor-pointer' alt='закрыть'
                     onClick={() => {
                         dispatch(setActiveModalDeleteFile())
                     }}></img>

                <p>Вы уверены, что хотите удалить файл?</p>
                <button onClick={onConfirmDelete}
                        className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 my-4"
                >Да</button>
                <button onClick={onRequestClose}
                        className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 my-4"
                >Отмена</button>
            </div>
        </div>
    );
};

export default ModalDeleteFile;
