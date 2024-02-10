import React from 'react';
import FolderAndFileCreate from "../components/FolderAndFileCreate";
import ListFolder from "../components/folder/ListFolder";

const Drive:React.FC = () => {

    return (
        <div>
            <p className='text-center my-10 text-3xl'>Папки и Файлы</p>
            <FolderAndFileCreate/>
            <ListFolder/>
        </div>
    );
};

export default Drive;
