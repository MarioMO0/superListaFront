import React from 'react'
import { Link } from 'react-router-dom'
import ListaItemsEditar from '../components/ListaItemsEditar'
import Navbar from '../components/Navbar'
import './Styles/listaEditar.css'
class ListaEditar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false,
        }
    }
    handleCloseModal = e => {
        this.setState({ modalIsOpen: false })
    }
    handleOpenModal = e => {
        this.setState({ modalIsOpen: true })
    }
    handleDeleteList = e => {

    }
    render() {
        return (
            <React.Fragment>
                < Navbar />
                <div className="editar-lista__contenedor-general">
                    <div className="editar-lista__contenedor-lista">
                        <ListaItemsEditar
                            onCloseModal={this.handleCloseModal}
                            onOpenModal={this.handleOpenModal}
                            onDeleteList={this.handleDeleteList}
                            modalIsOpen={this.state.modalIsOpen}
                        />
                    </div>
                </div>
                <div className="editar-lista__contenedor-botones">
                <Link to="/items" className="editar-lista__boton editar-lista__hecho"><i className="fas fa-check  editar-lista__icono-hecho"></i></Link>
                <Link to="/item/new" className="editar-lista__boton editar-lista__nuevo"><i className="fas fa-plus editar-lista__icono-nuevo"></i></Link>
                </div>
            </React.Fragment>
        )
    }
}
export default ListaEditar