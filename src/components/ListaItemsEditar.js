import React from 'react'
import './styles/listaItemEditar.css'
import BorrarItemModal from './BorrarItemModal'
var totalProductos = 0

class ListaItemsEditar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: totalProductos++,
                    nombre: 'Cokies',
                    descripcion: 'unas ricas cokies late',
                    cantidad: 1
                },
                {
                    id: totalProductos++,
                    nombre: 'chetos',
                    descripcion: 'unos ricos chetos',
                    cantidad: 1
                },
                {
                    id: totalProductos++,
                    nombre: 'jugo',
                    descripcion: 'un rico jugo',
                    cantidad: 1
                },
                {
                    id: totalProductos++,
                    nombre: 'Cokies',
                    descripcion: 'unas ricas cokies late',
                    cantidad: 1
                },
                {
                    id: totalProductos++,
                    nombre: 'Cokies',
                    descripcion: 'unas ricas cokies late',
                    cantidad: 1
                },
                {
                    id: totalProductos++,
                    nombre: 'Cokies',
                    descripcion: 'unas ricas cokies late',
                    cantidad: 1
                },
                {
                    id: totalProductos++,
                    nombre: 'Cokies',
                    descripcion: 'unas ricas cokies late',
                    cantidad: 1
                },
                {
                    id: totalProductos++,
                    nombre: 'Cokies',
                    descripcion: 'unas ricas cokies late'
                    , cantidad: 1
                },
            ]
        }
        this.handleClickMore = this.handleClickMore.bind(this)
        this.handleClickLess = this.handleClickLess.bind(this)
    }

    handleClickMore = ({ id }) => {
        let indexProducto = this.state.data.findIndex(x => x.id === id);//identificamos que el id que recibimos como argumento sea igual contra alguno de los ids del arreglo de objetos
        let producto = this.state.data;//hacemos una copia del arreglo de objetos
        producto[indexProducto].cantidad += 1;// aqui modificamos el valor de cantidad en +1 dentro del objeto deseado del arreglo de objetos
        this.setState({ producto });//aqui reemplazamos el antiguo arreglo de objetos con el arreglo de objetos con la cantidad aumnetada en +1
    }
    handleClickLess = ({ id }) => {
        let indexProducto = this.state.data.findIndex(x => x.id === id);
        let producto = this.state.data;
        producto[indexProducto].cantidad -= 1;
        this.setState({ producto });
    }
    render() {
        return (

            <React.Fragment>
                <ul className="lista-items">
                    {this.state.data.map(item => {
                        return (
                            <li key={item.id}>
                                <div className="item-row__container">
                                    <div className="item__borrar">
                                        <button onClick={this.props.onOpenModal} className="item__boton-borrar"> <i className="fas fa-trash-alt item__icono-boton"></i></button>
                                    </div>
                                    <div className="item__container">
                                        <span className="item--nombre">{item.nombre}</span>
                                        <input type="text" className="item__input-cantidad" value={this.state.data[item.id].cantidad} readOnly />
                                        <div className="item__controles">
                                            <button onClick={() => this.handleClickMore(item)} className="item__boton-aumentar"><i className="fas fa-sort-up icono-arriba"></i></button>
                                            <button onClick={() => this.handleClickLess(item)} className="item__boton-disminuir"><i className="fas fa-sort-down icono-abajo"></i></button>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        )
                    })}
                    <BorrarItemModal
                        isOpen={this.props.modalIsOpen}
                        onClose={this.props.onCloseModal}
                        onDeleteList={this.props.onDeleteList} />
                </ul>
            </React.Fragment>
        )
    }


}
export default ListaItemsEditar