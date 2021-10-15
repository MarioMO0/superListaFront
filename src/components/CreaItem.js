import React from 'react';
import { Link } from 'react-router-dom';
import './styles/creaItem.css'
class CreaItem extends React.Component {
    state = {
        nombre: '',
        imagen: '',
        descripcion: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    render() {
        return (
            <div>
                <form className="item-form" >
                    <h1 className="item-form__titulo">¡Crea un nuevo Producto!</h1>
                    <div className="item-form__grupo">
                        <label htmlFor="inputNombreProducto">
                            <span className="item-form__texto">Ponle nombre a tu producto</span>
                        </label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="nombre"
                            id="inputNombreProducto"
                            placeholder="¡Ponme un nombre!"
                            className="item-form__input"
                            value={this.props.nombre}
                        />

                    </div>
                    <div className="item-form__grupo">
                        <label htmlFor="inputImagenProducto">
                            <span className="item-form__texto">Selecciona la imagen de tu producto</span>
                        </label>
                        <input
                            onChange={this.handleChange}
                            type="file"
                            name="imagen"
                            id="inputImagenProducto"
                            placeholder="¡Selecciona una imagen!"
                            className="item-form__input"
                            value={this.props.imagen}
                        />

                    </div>
                    <div className="item-form__grupo">
                        <label htmlFor="inputDescripcionProducto">
                            <span className="item-form__texto">Dale una breve descripcion a tu producto</span>
                        </label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            name="descripcion"
                            id="inputDescripcionProducto"
                            placeholder="!Escribe una descripcion!"
                            className="item-form__input--area"
                            value={this.props.descripcion}
                        />
                    </div>
                    <Link to="/lista/edit">
                        <input type="submit" value="Guardar" className="item-form__boton" />
                    </Link>
                </form>
            </div>
        )
    }
}
export default CreaItem;