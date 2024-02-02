import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from "./pages/Profile";
import {isAuthenticated} from "./components/isAuthenticated";


// Гостевой компонент
const GuestRoute = ({ element }: any) => {
    return isAuthenticated() ? <Navigate to="/"/> : element;
};

// Защищенный компонент
const ProtectedRoute = ({ element }: any) => {
    return isAuthenticated() ? element : <Navigate to="/auth" />;
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />}>
                <Route index element={<Home />}/>
                <Route path="profile" element={<ProtectedRoute path="profile" element={<Profile />} />} />
                <Route path="auth" element={<GuestRoute element={<Auth />} />} />
            </Route>
        </Routes>
    );
};

export default App;
