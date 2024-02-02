import React from 'react';
import {isAuthenticated} from "../components/isAuthenticated";

const Home:React.FC = () => {
    const isAuth = isAuthenticated();
    return (
        <div className='text-center my-20 text-3xl'>
            <p>{isAuth ? 'вы авторизированы' : 'ГЛАВНАЯ СТРАНИЦА '}</p>
        </div>
    );
};

export default Home;
