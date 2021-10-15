import React from 'react';
import './styles/listaItems.css'
class ListaItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isChecked:false
        };
      }
 
    render() {
        return (
            <React.Fragment>
                <ul className="lista-items">
                {this.props.items.map(item => {
                    return (
                        <li key={item.id}>
                            <div className="item-row__container">
                                <div className="item__check">
                                    <input className="item__boton-check" type="checkbox" />
                                </div>
                                <div  className="item__container">
                                    <span className="item--nombre">{item.nombre}</span>
                                        <input type="text" className="item__input-cantidad" value={this.props.cantidad}/>
                                </div>
                            </div>

                        </li>
                    )
                })}
            </ul>
            </React.Fragment>
        )
    }
}

export default ListaItems;