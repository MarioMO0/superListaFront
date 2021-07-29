import React from 'react';
import Producto from '../images/MapacheBolsitaMerch.png'
import ListaItems from '../components/ListaItems'
var totalProductos = 0
class Items extends React.Component {
    state = {
        data: [
            {
                id: totalProductos++,
                nombre: 'Cokies',
                imagen: { Producto },
                descripcion: 'unas ricas cokies late'
            },
            {
                id: totalProductos++,
                nombre: 'chetos',
                imagen: { Producto },
                descripcion: 'unos ricos chetos'
            },
            {
                id: totalProductos++,
                nombre: 'jugo',
                imagen: { Producto },
                descripcion: 'un rico jugo'
            },
            {
                id: totalProductos++,
                nombre: 'Cokies',
                imagen: { Producto },
                descripcion: 'unas ricas cokies late'
            },
            {
                id: totalProductos++,
                nombre: 'Cokies',
                imagen: { Producto },
                descripcion: 'unas ricas cokies late'
            },
            {
                id: totalProductos++,
                nombre: 'Cokies',
                imagen: { Producto },
                descripcion: 'unas ricas cokies late'
            },
            {
                id: totalProductos++,
                nombre: 'Cokies',
                imagen: { Producto },
                descripcion: 'unas ricas cokies late'
            },
            {
                id: totalProductos++,
                nombre: 'Cokies',
                imagen: { Producto },
                descripcion: 'unas ricas cokies late'
            },
            
        ]
    }
    render() {
        return (
            <div>
                <div className="lista__items">
                    <div className="contenedor__items">
                        <h1>Nombre de tu lista</h1>
                        <ListaItems items={this.state.data} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Items;