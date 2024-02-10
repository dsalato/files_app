import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {toast} from "react-toastify";
import iconClose from '../../img/iconClose.png';
import {setActiveModalFile, setName} from "../../redux/slices/fileSlice";
import {FileService} from "../../services/file";


const ModalFile: React.FC = () => {
    const dispatch = useAppDispatch();
    const {activeModalFile} = useAppSelector((state) => state.file);
    const file = useAppSelector((state) => state.file.files.name);
    const folderId = useAppSelector((state) => state.folder.folders.id);

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     try {
    //         e.preventDefault();
    //
    //         console.log(file)
    //
    //         // const data = await FileService.createFile({folderId, file});
    //         // console.log(data, 'создание файла');
    //         // toast.success('Файл успешно создан')
    //         //
    //         // dispatch(setActiveModalFile())
    //
    //     } catch (err: any) {
    //         const error = err.response?.data.message
    //         toast.error(error.toString())
    //     }
    // }


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log(file);
            dispatch(setName(file.name));
        }
    };

    const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(file);
        if (file !== '') {
            console.log(file);
            const data = await FileService.createFile({folderId, file});
            console.log(data, 'создание файла');
            toast.success('Файл успешно создан')
        }
        console.log('Отправить')
    };


    return (
        <div
            className={activeModalFile ? 'scale-1 h-[100vh] w-[100vw] bg-gray-700/45 fixed top-0 left-0 flex items-center justify-center duration-50' : 'hidden'}>
            <div className='p-5 rounded-xl bg-white h-[200px] w-[400px]' onClick={(e) => e.stopPropagation()}>
                <img src={iconClose} className='w-[20px] h-[20px] float-right cursor-pointer' alt='закрыть'
                     onClick={() => {
                         dispatch(setActiveModalFile())
                     }}></img>
                <p> Создание файла </p>
                <form onSubmit={handleUpload} encType={"multipart/form-data"}>
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900 my-2">Название</label>
                        <div className="mt-2">
                            <input
                                name="name"
                                type="file"
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div>
                        </div>
                    </div>
                    <div>
                        <button type="submit"
                                className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 my-4">
                            Создать
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalFile;
