import React from 'react';
import Navbar from '../components/Navbar';
import mapache from '../images/MapacheBolsitaMerch.png';
import './Styles/misListas.css'

class misListas extends React.Component{

    render(){
        return(
            <div>
                <Navbar />
                <div className="listas__contenedor">
                    <figure className="listas__contenedor-imagen">
                        <img src={mapache} alt="" className="listas__imagen" />
                    </figure>
                    <div className="listas__boton"> 
                        <a href="/misListas/nueva" className="boton boton--agregar">+</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default misListas;