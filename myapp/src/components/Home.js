import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import crud from "../conections/crud";


const Home = () => {

    const [categoria, setCategoria ] = useState([]);

    const cargarCategorias = async () => {
        const response = await crud.GET(`/api/categories/home`)
        setCategoria(response.category)
    }

    useEffect(() => {
        cargarCategorias()
    }, []);

    return (
        <main  className='flex-1'>
            <div className=' flex justify-center md:w-2/3 lg:w-2/5'>
                <h1 className='inline  p-8  bg-gradient-to-r text-sky-200 bg-clip-text font-display text-5xl tracking-tight text-transparent'>
                    Home
                </h1>
                <Link className="text-stone-900 uppercase font-bold rounded hover:cursor-pointer hover:bg-red-600 transition-colors" to={"/Login"}> Log In </Link>
            </div>
            <div className=" flex bg-sky-200">
                <div className="py-16 sm:py-24 xl:max-w-7xl xl:px-8">
                    <div className="px4 sm:flex sm:items-center sm:justify-between sm:px6 lg:px8 xl:px-0">
                        <h2 className="text-2xl font-bold tracking-tight text-stone-900"> Shop By Category </h2>
                        <a href="#" className=" hidden text-sm font-semibold ">
                            Browse All Categories
                            <span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                    <div className="mt-4 flow-root">
                        <div className="-my-2">
                            <div className="relative box-content h-80 overflow-x-auto pt-2 xl:overflow-visible">
                                <div className="min-w-screesn-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative">
                                    {categoria.map((category => (
                                        <a
                                        key={category.nombre}
                                        href={category.href}
                                        className="relative flex h-80 w-56 flex-col overflow-hidden rounded p-6 hover:opacity-75 xl-auto ">
                                            <span aria-hidden="true" className="absolute inset-0">
                                                <img src={category.imagen} alt="" className="h-full w-full object-cover object-center"></img>
                                            </span>
                                            <span aria-hidden="true"
                                                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t form-gray-800 opacity-50"/>
                                            <span className="relative mt-auto text0center text-xl font-bold stone-800">{category.nombre}</span>
                                        </a>
                                    )))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 px-4 sm:hidden">
                        <a href="#" className="block font-semibold text-stone-800 hover:text-blue-400">
                            Browse all categories
                            <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Home;