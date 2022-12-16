import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import SideBar from "./Sidebar";

const Admin = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate("/login");
            } 
        }
        autenticarUsuario()
    },[]); // [] se ejecuta solo una vez, cuando se ingresa

    return (
        <>
            <Header/>
            <div className="md:flex md:min-h-screen">
                <SideBar/>
            </div> 
        </>
    )
};

export default Admin;