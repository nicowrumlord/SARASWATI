import React from "react";

export const ViewProductos = ({producto}) => {

    const {nombre, descripcion, stock, precio, imagen} = producto;

    return(
        
        <div className="border-b p5 flex justify-between items-center">
            <div className="flex flex-col items-start">
                <p className="mb-1 text-xl text-stone-800">Name :    {nombre}</p>
                <p className="mb-1 text-xl text-stone-800 uppercase">Description :   {descripcion}</p>
                <p className="mb-1 text-xl text-stone-800">Stock :   {stock}</p>
                <p className="mb-1 text-xl text-stone-800 uppercase" >Price :    {precio}</p>
                <img src={imagen} width="150" height="150"></img>

            </div>
            
        </div>
        
    );
}

export default ViewProductos;