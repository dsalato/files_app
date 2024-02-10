import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {setActiveModal, setEditingFolderId, setFolder} from "../../redux/slices/folderSlice";
import {FolderService} from "../../services/folder";
import iconEdit from "../../img/iconEdit.png";
import iconDelete from "../../img/iconDelete.png";
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;
import Modal from "./Modal";
import {instance} from "../../api/axios";

const ListFolder: React.FC = () => {
    const {folders} = useAppSelector((state) => state.folder);
    const editingFolderId = useAppSelector((state) => state.folder.editingFolderId);
    const activeModal = useAppSelector((state) => state.folder);
    const [moveId, setMoveId] = useState('');
    const [changeId, setChangeId] = useState('');
    const dispatch = useAppDispatch();

    const changeAndRemoveFolder = async () => {
        if (folders.id !== '') {
            let id = 'root'

            if (moveId !== '' && moveId !== folders.id) {
                id = moveId
                console.log('move')
            } else if (changeId !== '' && changeId !== folders.id) {
                id = folders.id
                console.log('change')
            } else {
                id = folders.id
                console.log('else')
            }

            const {data} = await FolderService.viewFolder(id);
            dispatch(setFolder(data));
        }
    }

    const getData = async () => {
        const {data} = await FolderService.viewFolder('root');
        dispatch(setFolder(data));
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        changeAndRemoveFolder();
        console.log(1);
    }, [moveId, editingFolderId]);


    const handleEditFolder = async (folderId: string) => {
        dispatch(setEditingFolderId(folderId));
        dispatch(setActiveModal());
    };

    const handleDeleteFolder = async (folderId: string) => {
        await FolderService.deleteFolder(folderId);
    };

    return (
        <div>
            <div className='flex items-center justify-center'>
                <p className='my-10 text-xl'>{folders.name === "root" ? 'Корневая' : folders.name}</p>
                <p className=' mx-5 my-10 text-xl'>&#8594;</p>
                <p className='cursor-pointer my-10 text-xl hover:underline' onClick={() => {
                    setMoveId('root')
                }}>Переход к корневой папке</p>
            </div>

            {folders.children.map((el) => (
                <div className='flex items-center justify-center my-4' key={el.id}>
                    <p className=' text-center text-[16px] cursor-pointer' onClick={() => {
                        setMoveId(el.id)
                    }}>{el.name}</p>
                    <img src={iconEdit} alt='iconEdit' className='w-[20px] h-[20px] mx-3 cursor-pointer'
                         onClick={() => {
                             handleEditFolder(el.id);
                             setChangeId(el.id);
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
