import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import mapache from '../images/MapacheBolsitaMerch.png';
import './Styles/inicio.css'

class Inicio extends React.Component{

    render(){
        return(
            <div>
                <Navbar />
                <div className="inicio__contenedor">
                    <figure className="inicio__contenedor-imagen">
                        <img src={mapache} alt="" className="inicio__imagen" />
                    </figure>
                    <div className="inicio__boton"> 
                        <Link to="/lista/new" className="boton1 boton--agregar">+</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Inicio;