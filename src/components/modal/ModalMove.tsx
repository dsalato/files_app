import React from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {
    setActiveModalMove, setFolder,
    setMovingFolderId,
} from "../../redux/slices/folderSlice";
import {toast} from "react-toastify";
import {FolderService} from "../../services/folder";
import iconClose from '../../img/iconClose.png';


const ModalMove: React.FC = () => {
    const dispatch = useAppDispatch();
    const {activeModalMove} = useAppSelector((state) => state.folder);
    const {folders} = useAppSelector((state) => state.folder);
    const name = useAppSelector((state) => state.folder.folders.name);
    const id = useAppSelector((state) => state.folder.folders.id);
    const parentId = useAppSelector((state) => state.folder.movingFolderId);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            await FolderService.updateFolder(id, {name, parentId});
            dispatch(setMovingFolderId(''));
            toast.success('Папка успешно Переместилась')

            const {data} = await FolderService.viewFolder(folders.id);
            dispatch(setFolder(data));
            dispatch(setActiveModalMove())

        } catch (err: any) {
            return err.response?.data.message
        }
    }


    return (
        <div
            className={activeModalMove ? 'scale-1 h-[100vh] w-[100vw] bg-gray-700/45 fixed top-0 left-0 flex items-center justify-center duration-50' : 'hidden'}>
            <div className='p-5 rounded-xl bg-white h-[200px] w-[400px]' onClick={(e) => e.stopPropagation()}>
                <img src={iconClose} className='w-[20px] h-[20px] float-right cursor-pointer' alt='закрыть'
                     onClick={() => {
                         dispatch(setActiveModalMove())
                     }}></img>
                <p>Перемещение папки</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="mt-2">
                            <select onChange={(e) => {
                                dispatch(setMovingFolderId(folders.children[e.target.selectedIndex].id));
                            }}>

                                {folders.children.map((el) => (
                                    el.type === 'folder' &&
                                    <option value={el.id} key={el.id}
                                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6"
                                    >{el.name}</option>

                                ))}
                            </select>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div>
                        <button type="submit"
                                className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 my-4">
                            Переместить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalMove;
