import React, {useEffect} from 'react';
import {isAuthenticated} from "../components/isAuthenticated";
import {useAppSelector} from "../redux/store";

const Home:React.FC = () => {
    const isAuth = isAuthenticated();

    return (
        <div className='text-center my-20 text-3xl'>
            <p>{isAuth ? 'вы авторизированы' : 'ГЛАВНАЯ СТРАНИЦА '}</p>
        </div>
    );
};

export default Home;
