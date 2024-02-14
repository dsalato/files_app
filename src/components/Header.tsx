import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../redux/store";
import {changeTypeOfForm, logout} from "../redux/slices/userSlice";
import {removeTokenFromLocalStorage} from "../helpers/localstorage";
import {toast} from "react-toastify";
import {isAuthenticated} from "./isAuthenticated";

const Header: React.FC = () => {
    const isAuth = isAuthenticated();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        removeTokenFromLocalStorage('token');
        dispatch(logout());
        navigate('/');
        toast.success('Вы вышли');
    }

    return (
        <div className='flex justify-around items-center py-5 border-b-2 border-solid border-black'>
            <Link to='/' className="text-2xl font-bold text-yellow-400">Disk_App</Link>
            {!isAuth ? <span className=''>
                <Link to='/auth' onClick={() => dispatch(changeTypeOfForm(true))}
                      className='mx-3 text-lg hover:bg-yellow-400 py-4 px-2 rounded'>Вход</Link>
                <Link to='/auth' onClick={() => dispatch(changeTypeOfForm(false))}
                      className='text-lg hover:bg-yellow-400 py-4 px-2 rounded'>Регистрация</Link>
            </span> : <span className=''>
                <Link to='/drive' className='mx-3 text-lg hover:bg-yellow-400 py-4 px-2 rounded'>Папки и Файлы</Link>
                <Link to='/' className='mx-3 text-lg hover:bg-yellow-400 py-4 px-2 rounded'
                      onClick={logoutHandler}>Выход</Link>
            </span>}

        </div>
    );
};

export default Header;
