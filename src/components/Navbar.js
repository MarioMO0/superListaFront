import React from 'react'
import { Link } from 'react-router-dom'
import './styles/navbar.css'
import carrito from '../images/carrito.png'
class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpened: false
        }

        this.ToggleNav = this.ToggleNav.bind(this);
    }
    ToggleNav(){
        this.setState(state =>({ isOpened : !state.isOpened}))
    }
    render() {
        const isOpened  = this.state.isOpened
        return (
            <React.Fragment>
                <div className="navbar">
                    <figure className="navbar__contenedor-imagen">
                        <img className="navbar__imagen" src={carrito} alt="Logo superLista" />
                    </figure>
                    <div className="menu-desplegable" onClick={this.ToggleNav}>
                        <i className="fas fa-bars menu-desplegable__icono"></i>
                    </div>
                    {
                        isOpened &&
                        <nav className="navbar__menu-lateral">
                            <ul className="navbar__lista">
                                <li className="navbar__item-lista"><Link className="navbar__texto-item" to="/inicio"><i className="fas fa-home navbar--icon"></i>HOME</Link></li>
                                <li className="navbar__item-lista"><Link className="navbar__texto-item" to="/listas"><i className="fas fa-user navbar--icon"></i>MIS LISTAS</Link></li>
                                <li className="navbar__item-lista"><Link className="navbar__texto-item" to="/"><i className="fas fa-receipt navbar--icon"></i>RECETAS</Link></li>
                            </ul>
                        </nav>
                    }
                </div>
            </React.Fragment>
        )
    };
}

export default Navbar;