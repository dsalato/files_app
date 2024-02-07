import React from 'react';
import FolderCreate from "../components/folder/FolderCreate";
import ListFolder from "../components/folder/ListFolder";

const Drive:React.FC = () => {

    return (
        <div>
            <p className='text-center my-10 text-3xl'>Папки и Файлы</p>
            <FolderCreate/>
            <ListFolder/>
        </div>
    );
};

export default Drive;
