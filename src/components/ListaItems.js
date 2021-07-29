import React from 'react';
import './styles/listaItems.css'
class ListaItems extends React.Component {
    render() {
        return(
            <ul className="lista-items">
                {this.props.items.map(item => {
                    return(
                        <li key={item.id}>
                            <div className="item__container">
                                <span className="item--nombre">{item.nombre}</span>
                                <div className="item__controles">
                                    <input type="text" className="item__input-cantidad" defaultValue="1" />
                                    <div className="item__controles-arriba-abajo">
                                        <button
                                         onClick={this.handleClick} 
                                         className="item__boton-arriba" 
                                         id="item__boton-arriba"
                                         name="item__boton-arriba"
                                         >
                                             <i className="fas fa-angle-up icono-arriba"></i>
                                        </button>
                                        <button className="item__boton-abajo" id="item__boton-abajo"><i className="fas fa-angle-down icono-abajo"></i></button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ListaItems;