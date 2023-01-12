import React from "react"
import ejemplo from "../imagenes/ejemplo.png"
export const Header = () => {
    return(
    <header>
        
        <a href="#">
        <div>
            <img src={ejemplo}></img>
        </div>
        </a>
        <ul>
            <li> <a href="#">Inicio</a> </li>
            <li> <a href="#">Productos</a></li>
        </ul>
        <div className="cart">
            <p>CARRITO</p>
            <span className="totalitems">0</span>
            
        </div>
    </header>
)
}
