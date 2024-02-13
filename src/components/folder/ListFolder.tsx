import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {
    setActiveModal,
    setActiveModalMove,
    setEditingFolderId,
    setFolder,
    setFolderName,
    setFolderId,
    setDeleteFolderId,
    setActiveModalDeleteFolder,
    setActiveModalDeleteFile,
    setDeleteFileId,
} from "../../redux/slices/folderSlice";
import {FolderService} from "../../services/folder";
import iconEdit from "../../img/iconEdit.png";
import iconDelete from "../../img/iconDelete.png";
import iconMove from "../../img/iconMove.png";
import iconFile from "../../img/iconFile.png";
import iconFolder from "../../img/iconFolder.png"

import {FileService} from "../../services/file";

const ListFolder: React.FC = () => {
    const {folders} = useAppSelector((state) => state.folder);
    const parentId = useAppSelector((state) => state.folder.folders.id);
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

    const handleMoveFolder = async (folderId: string, folderName: string) => {
        dispatch(setFolderId(folderId));
        dispatch(setFolderName(folderName));
        dispatch(setActiveModalMove());
    };

    const handleDeleteFolder = async (folderId: string) => {
        dispatch(setDeleteFolderId(folderId));
        dispatch(setActiveModalDeleteFolder());

    };

    const handleDeleteFile = async (folderId: string) => {
        dispatch(setDeleteFileId(folderId));
        dispatch(setActiveModalDeleteFile());

    };


    useEffect(() => {
        getData('root');
    }, [])

    useEffect(() => {
    }, [folders]);


    return (
        <>
            <div className='flex items-center justify-center'>
                <p className='my-10 text-xl'>{folders.name === "root" ? 'Корневая' : folders.name}</p>
                <p className=' mx-5 my-10 text-xl'>&#8594;</p>
                <p className='cursor-pointer my-10 text-xl hover:underline' onClick={() => {
                    moveFolder('root')
                }}>Переход к корневой папке</p>
            </div>

            <div>
            {folders.children.map((el) => (
                el.type === 'folder' ?
                    <div key={el.id} className='flex items-center justify-center my-2'>
                        <img className='w-[20px] h-[20px] mx-1' alt='папка' src={iconFolder}/>
                        <p className=' text-center text-[16px] cursor-pointer' onClick={() => {
                            moveFolder(el.id)
                        }}>{el.name}</p>

                        <img src={iconEdit} alt='iconEdit' className='w-[20px] h-[20px] ml-10 mr-2 cursor-pointer'
                             onClick={() => {
                                 handleEditFolder(el.id);
                             }}></img>
                        <img src={iconDelete} alt='iconDelete' className='w-[20px] h-[20px] mx-2 cursor-pointer'
                             onClick={() => {
                                 handleDeleteFolder(el.id);
                             }}></img>
                        <img src={iconMove} alt='iconMove' className='w-[20px] h-[20px] mx-2 cursor-pointer'
                             onClick={() => {
                                 handleMoveFolder(el.id, el.name);
                             }}></img>
                    </div>
                :
                    <div key={el.id} className='flex items-center justify-center my-2'>
                        {el.type === 'file' &&
                            <div className='flex items-center justify-center'>
                                <img className='w-[20px] h-[20px] ' alt='папка' src={iconFile}/>
                                <p className=' text-center text-[16px] cursor-pointer'>{el.file.name}</p>
                            </div>

                        }
                        <img src={iconDelete} alt='iconDelete' className='w-[20px] h-[20px] ml-8 cursor-pointer'
                             onClick={() => {
                                 handleDeleteFile(el.id);
                             }}></img>

                    </div>
            ))}
            </div>
        </>
    );

};

export default ListFolder;
