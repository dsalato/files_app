import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import {useAppDispatch} from "../redux/store";
import {changeTypeOfForm, logout} from "../redux/slices/userSlice";
import {removeTokenFromLocalStorage} from "../helpers/localstorage";
import {toast} from "react-toastify";

const Header:React.FC = () => {
    const isAuth = useAuth();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const logoutHandker = () => {
         dispatch(logout());
         removeTokenFromLocalStorage('token');
         toast.success('Вы вышли');
         navigate('/');
     }
    return (
        <div className='flex justify-around items-center py-5 border-b-2 border-solid border-black'>
            <Link to='/' className="text-2xl font-bold text-yellow-400">HEADER</Link>
            {!isAuth ? <span className=''>
                <Link to='/auth' onClick={() => dispatch(changeTypeOfForm(true))} className='mx-3 text-lg hover:bg-yellow-400 py-4 px-2 rounded'>Вход</Link>
                <Link to='/auth' onClick={() => dispatch(changeTypeOfForm(false))} className='text-lg hover:bg-yellow-400 py-4 px-2 rounded'>Регистрация</Link>
            </span> : <span className=''>
                <Link to='/' className='mx-3 text-lg hover:bg-yellow-400 py-4 px-2 rounded' onClick={logoutHandker}>Выход</Link>
            </span>}

        </div>
    );
};

export default Header;
