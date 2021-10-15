import React from 'react'
import Modal from './Modal'
import './styles/borrarListaModal.css'
function BorrarListaModal(props) {
    return (
        <>
           <Modal isOpen={props.isOpen} onClose={props.onClose} >
            <div className="borrar-lista-modal">
                <h1 className="borrar-lista-modal__titulo">¿Estas seguro?</h1>
                <p className="borrar-lista-modal__pregunta">¿quieres borrar esta lista?</p>
                <div className="borrar-lista-modal__contenedor-botones">
                    <button onClick={props.onDeleteList} className="btn btn-borrar">Borrar</button>
                    <button onClick={props.onClose} className="btn btn-cancelar">Cancelar</button>
                </div>
            </div>
            </Modal> 
        </>
    )
}

export default BorrarListaModal
