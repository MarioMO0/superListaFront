import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ListaDeListas from '../components/ListaDeListas'
import './Styles/listas.css'
var idLista=0
class Listas extends React.Component{
    state={
        data:[
            {
                id: idLista++,
                nombre : `mi lista${idLista}`
            },
            {
                id: idLista++,
                nombre : `mi lista${idLista}`
            },
            {
                id: idLista++,
                nombre : `mi lista${idLista}`
            },
            {
                id: idLista++,
                nombre : `mi lista${idLista}`
            },
            {
                id: idLista++,
                nombre : `mi lista${idLista}`
            },
        ],
        modalIsOpen: false,
    }
     handleCloseModal = e =>{
         this.setState( { modalIsOpen: false } )
     }
     handleOpenModal = e =>{
        this.setState( { modalIsOpen: true } )
    }
     handleDeleteList = e =>{
         
     }
    render(){
        return(
            < React.Fragment>
                < Navbar />
                    <div className="lista__contenedor-listas">
                        < ListaDeListas 
                          listas={this.state.data} 
                          onCloseModal={this.handleCloseModal}
                          onOpenModal={this.handleOpenModal}
                          onDeleteList={this.handleDeleteList}
                          modalIsOpen={this.state.modalIsOpen}
                        />
                        <Link className="lista__boton-crear" to="lista/new">+</Link>
                    </div>
            </React.Fragment>
            )
    }
        
    
}

export default Listas