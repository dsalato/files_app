import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {AuthService} from "../services/auth";
import {toast} from "react-toastify";
import {setTokenFromLocalStorage} from "../helpers/localstorage";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {authLogin, changeTypeOfForm, setLogin, setPassword} from "../redux/slices/userSlice";
import ViewTrue from '../img/viewTrue.png';
import ViewFalse from '../img/viewFalse.png';

const Auth: React.FC = () => {
    const {typeOfForm, login, password} = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const data = await AuthService.login({login, password});
            if (data) {
                setTokenFromLocalStorage('token', data.token);
                dispatch(authLogin(data));
                toast.success('Вы авторизировались');
                navigate('/drive');
            }
        } catch (err: any) {
            const error = err.response?.data.message
            toast.error(error.toString())
        }
    }

    const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const data = await AuthService.registration({login, password})
            if (data) {
                toast.success('Аккаунт успешно создан')
                dispatch(changeTypeOfForm(!typeOfForm))
            }
        } catch (err: any) {
            const error = err.response?.data.message
            toast.error(error.toString())
        }
    }

    return (
        <div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{typeOfForm ? 'Вход' : 'Регистрация'}</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" method="POST"
                          onSubmit={typeOfForm ? loginHandler : registrationHandler}>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">Логин</label>
                            <div className="mt-2">
                                <input
                                    name="login"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6"
                                    onChange={(e) => dispatch(setLogin(e.target.value))}/>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Пароль</label>
                            </div>
                            <div className="mt-2 relative">
                                <input
                                    id="password-input"
                                    name="password"
                                    type={isPasswordVisible ? 'text' : 'password'}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6"
                                    onChange={(e) => dispatch(setPassword(e.target.value))}

                                />
                                <img src={isPasswordVisible ? ViewTrue : ViewFalse}
                                     alt='скрытый пароль'
                                     className='absolute top-[8px] right-[10px] inline-block w-[20px] h-[20px] cursor-pointer'
                                     onClick={togglePasswordVisibility}
                                ></img>
                            </div>
                        </div>
                        <div>
                            <button type="submit"
                                    className="flex w-full justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300">{typeOfForm ? 'Войти' : 'Зарегистрироваться'}</button>
                        </div>
                        <div>
                            <p className='text-sm hover:text-yellow-600 cursor-pointer'
                               onClick={() => dispatch(changeTypeOfForm(!typeOfForm))}>{typeOfForm ? 'Создать новый аккаунт' : 'У меня уже есть аккаунт'}</p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Auth;
