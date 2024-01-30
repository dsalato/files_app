import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import {useAppDispatch} from "./redux/store";
import {getTokenFromLocalStorage} from "./helpers/localstorage";
import {AuthService} from "./services/auth";
import {authLogin, logout} from "./redux/slices/userSlice";

const App = () => {
    const dispatch = useAppDispatch()
    const checkAuth = async () => {
        const token = getTokenFromLocalStorage();
        try {
            if(token){
                const data = await AuthService.getMe()
                if(data){
                    dispatch(authLogin(data))
                }else{
                    dispatch(logout())
                }
            }

        }catch (error){
            console.log(error)
        }
    }
    useEffect(() => {
        checkAuth()
    }, [])
  return (
          <Routes>
              <Route path='/' element={<Main/>}>
                  <Route path='' element={<Home/>}/>
                  <Route path='auth' element={<Auth/>}/>
              </Route>
          </Routes>
  );
}

export default App;
