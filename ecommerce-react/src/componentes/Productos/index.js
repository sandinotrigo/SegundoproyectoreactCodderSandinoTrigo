import React from "react"
import ejemplo from "../../componentes/imagenes/ejemplo.png"
export const ProductosLista = () => {return(
    <div className="productoss">
    <h1 className="titulo">Nuestros productos</h1>
    <div className="Productos">
    
        <a href="">
        <div className="p1">
            <img src="{ejemplo}" alt="producto1"/>
        </div>
        </a>
        <div className="Descripcion_producto">
            <h2> Nombre producto</h2>
            <p>Categoria:</p>
            <p className="precio">precio</p>
            </div>
        <div>
            <button>Llevar al carrito</button>
        </div>

        <div className="p2"></div>
        <div className="p3"></div>
        <div className="p4"></div>

    </div>
    </div>
)
}