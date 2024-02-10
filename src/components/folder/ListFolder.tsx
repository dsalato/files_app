import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {setActiveModal, setEditingFolderId, setFolder} from "../../redux/slices/folderSlice";
import {FolderService} from "../../services/folder";
import iconEdit from "../../img/iconEdit.png";
import iconDelete from "../../img/iconDelete.png";

const ListFolder: React.FC = () => {
    const {folders} = useAppSelector((state) => state.folder);
    const dispatch = useAppDispatch();

    const moveFolder = async (id: string) => {
        const {data} = await FolderService.viewFolder(id);
        dispatch(setFolder(data));
    }

    const getData = async (id: string) => {
        const {data} = await FolderService.viewFolder(id);
        dispatch(setFolder(data));
    }

    const handleEditFolder = async (folderId: string) => {
        dispatch(setEditingFolderId(folderId));
        dispatch(setActiveModal());
    };

    const handleDeleteFolder = async (folderId: string) => {
        await FolderService.deleteFolder(folderId);
        getData(folders.id);
    };

    useEffect(() => {
        getData('root');
    }, [])

    useEffect(() => {
    }, [folders]);


    return (
        <div>
            <div className='flex items-center justify-center'>
                <p className='my-10 text-xl'>{folders.name === "root" ? 'Корневая' : folders.name}</p>
                <p className=' mx-5 my-10 text-xl'>&#8594;</p>
                <p className='cursor-pointer my-10 text-xl hover:underline' onClick={() => {moveFolder('root')}}>Переход к корневой папке</p>
            </div>

            {folders.children.map((el) => (
                <div className='flex items-center justify-center my-4' key={el.id}>
                    <p className=' text-center text-[16px] cursor-pointer' onClick={() => {moveFolder(el.id)}}>{el.name}</p>
                    <img src={iconEdit} alt='iconEdit' className='w-[20px] h-[20px] mx-3 cursor-pointer'
                         onClick={() => {
                             handleEditFolder(el.id);
                         }}></img>
                    <img src={iconDelete} alt='iconDelete' className='w-[20px] h-[20px] mx-3 cursor-pointer'
                         onClick={() => {
                             handleDeleteFolder(el.id);
                         }}></img>
                </div>

            ))}
        </div>
    );
};

export default ListFolder;
