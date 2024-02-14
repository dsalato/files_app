import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './pages/Home';
import Auth from './pages/Auth';
import {isAuthenticated} from "./components/isAuthenticated";
import Drive from "./pages/Drive";

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
                <Route path="drive" element={<ProtectedRoute path="drive" element={<Drive />} />} />
                <Route path="auth" element={<GuestRoute element={<Auth />} />} />
            </Route>
        </Routes>
    );
};

export default App;
