import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Main from "../pages/Main"
import Login from "../pages/Login";
import Register from "../pages/Register";
import MovieDetail from "../pages/MovieDetail";
import Navbar from "../components/Navbar";

//  route kullanacaksak ilk yapacagımız route yapısını browser router ile sarmalamak


const AppRouter = () => {
  return <BrowserRouter>
  {/* roteslar bizim switch yapılarımız */}
  <Navbar/>
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/details/:id" element={<MovieDetail/>}/>



  </Routes>
         </BrowserRouter>;
};

export default AppRouter;
