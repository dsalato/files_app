import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home";

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Main/>}>
                  <Route path='' element={<Home/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
