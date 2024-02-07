import React from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {setActiveModal, setName} from "../../redux/slices/folderSlice";
import {toast} from "react-toastify";
import {FolderService} from "../../services/folder";
import iconClose  from '../../img/iconClose.png';


const Modal: React.FC = () => {
    const dispatch = useAppDispatch();
    const {activeModal} = useAppSelector((state) => state.folder);
    const name = useAppSelector((state) => state.folder.folderName);
    const parentId = useAppSelector((state) => state.folder.folders.id);



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const data = await FolderService.createFolder({name, parentId});

            if(data){
                toast.success('Папка успешно создана')
                dispatch(setActiveModal())

            }
        }catch (err:any){
            const error = err.response?.data.message
            toast.error(error.toString())
        }
    }

    return (
        <div className= { activeModal ? 'scale-1 h-[100vh] w-[100vw] bg-gray-700/45 fixed top-0 left-0 flex items-center justify-center duration-50' : 'hidden'} >
            <div className='p-5 rounded-xl bg-white h-[200px] w-[400px]' onClick={(e) => e.stopPropagation()} >
                <img src={iconClose} className='w-[20px] h-[20px] float-right cursor-pointer' onClick={()=>{dispatch(setActiveModal())}}></img>
                <p>Создание папки</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium leading-6 text-gray-900 my-2">Название</label>
                        <div className="mt-2">
                            <input
                                name="name"
                                type="text"
                                required
                                value={name}
                                className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6"
                                onChange={(e) => dispatch(setName(e.target.value))}
                            />
                        </div>
                        <div>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 my-4">Создать</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;