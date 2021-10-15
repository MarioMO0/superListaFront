import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Styles/listanew.css'

class ListaNew extends React.Component {

    render() {
        return (
            <React.Fragment>
                < Navbar />
                <div className="lista-nueva__contenedor">
                    <div className="lista-nueva__formulario">
                        <div className="lista-nueva__grupo-formulario">
                            <label className="lista-nueva__label--nombre-lista"> ponle nombre a tu lista</label>
                            <input className="lista-nueva__input--nombre-lista" type="text" />
                        </div>
                        <div className="lista-nueva__grupo-formulario">
                            <label className="lista-nueva__label--color-lista">ponle un color a tu lista</label>
                            <input className="lista-nueva__input--color-lista" type="color" />
                        </div>
                        <Link className="lista-nueva__boton-enviar" to="/listas">Guardar</Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }



}
export default ListaNew