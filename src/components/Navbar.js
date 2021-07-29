import React from 'react'
import './styles/navbar.css'
import carrito from '../images/carrito.png'
class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar"> 
                <figure className="navbar__contenedor-imagen">
                    <img className="navbar__imagen" src={carrito} alt="Logo superLista" />
                </figure>
                <nav  id="menu-lateral" className="navbar__menu-lateral">
                    <ul className="navbar__lista">
                        <li className="navbar__item-lista"><a className="navbar__texto-item" href="/"><i className="fas fa-home navbar--icon"></i>HOME</a></li>
                        <li className="navbar__item-lista"><a className="navbar__texto-item" href="/"><i className="fas fa-user navbar--icon"></i>PERFIL</a></li>
                        <li className="navbar__item-lista"><a className="navbar__texto-item" href="/"><i className="fas fa-receipt navbar--icon"></i>RECETAS</a></li>
                    </ul>
                </nav>
                <div className="menu-desplegable">
                <i className="fas fa-bars menu-desplegable__icono"></i>
                </div>
            </div>
        )
    };
}

export default Navbar;