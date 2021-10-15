import React from 'react';
import Producto from '../images/MapacheBolsitaMerch.png'
import ListaItems from '../components/ListaItems'
import Navbar from '../components/Navbar'

import './Styles/items.css'
import { Link } from 'react-router-dom';
var totalProductos = 0
class Items extends React.Component {
    state = {
        data: [
            {
                id: totalProductos++,
                nombre: 'Cokies',
                imagen: { Producto },
                descripcion: 'unas ricas cokies late',
                cantidad: 1
            },
            {
                id: totalProductos++,
                nombre: 'chetos',
                imagen: { Producto },
                descripcion: 'unos ricos chetos',
                cantidad: 1
            },
            {
                id: totalProductos++,
                nombre: 'jugo',
                imagen: { Producto },
                descripcion: 'un rico jugo',
                cantidad: 1
            },
            {
                id: totalProductos++,
                nombre: 'Cokies',
                imagen: { Producto },
                descripcion: 'unas ricas cokies late',
                cantidad: 1
            },
            {
                id: totalProductos++,
                nombre: 'Cokies',
                imagen: { Producto },
                descripcion: 'unas ricas cokies late',
                cantidad: 1
            },
            {
                id: totalProductos++,
                nombre: 'Cokies',
                imagen: { Producto },
                descripcion: 'unas ricas cokies late',
                cantidad: 1
            },
            {
                id: totalProductos++,
                nombre: 'Cokies',
                imagen: { Producto },
                descripcion: 'unas ricas cokies late',
                cantidad: 1
            },
            {
                id: totalProductos++,
                nombre: 'Cokies',
                imagen: { Producto },
                descripcion: 'unas ricas cokies late'
                , cantidad: 1
            },
            {
                id: totalProductos++,
                nombre: 'Cokies',
                imagen: { Producto },
                descripcion: 'unas ricas cokies late',
                cantidad: 1
            },
            {
                id: totalProductos++,
                nombre: 'Cokies',
                imagen: { Producto },
                descripcion: 'unas ricas cokies late',
                cantidad: 1
            },
        ]
    }

    handleClick = e => {
        console.log(e)
    }
    render() {
        return (
            <React.Fragment>
                < Navbar />
                <div className="contenedor">
                    <div className="contenedor__lista-items">
                        <ListaItems items={this.state.data} />
                    </div>
                </div>
                <div className="contenedor__botones">
                <Link to="/lista/edit" className="boton boton--editar"><i className="fas fa-pencil-alt editar-icono"></i></Link>
                </div>
                
            </React.Fragment>
        )
    }
}

export default Items;