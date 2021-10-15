import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import BorrarListaModal from './BorrarListaModal'
import './styles/listaDeListas.css'

class ListaDeListas extends Component{
    render(){
        return(
            <React.Fragment>
            <ul className="lista-de-listas">
                {this.props.listas.map(lista => {
                    return (
                        <li key={lista.id}>

                            <div className="lista-row__contenedor">
                                <div className="lista__borrar">
                                    <button onClick={this.props.onOpenModal} className="lista__boton-borrar"><i className="fas fa-trash-alt lista__icono-borrar"></i></button>
                                </div>
                                <Link to="/items" className="lista__container">
                                    <span className="lista__nombre">{lista.nombre}</span>
                                </Link>
                            </div>
                        </li>
                    )
                })}
                <BorrarListaModal
                 isOpen={this.props.modalIsOpen} 
                 onClose={this.props.onCloseModal}
                 onDeleteList={this.props.onDeleteList}
                />
            </ul>

        </React.Fragment>
        )
    }
}


export default ListaDeListas;