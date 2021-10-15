import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Inicio from '../pages/Inicio'
import Items from '../pages/Items';
import ItemNew from '../pages/ItemNew';
import ListaNew from '../pages/ListaNew';
import Listas from '../pages/Listas';
import Navbar from './Navbar';
import ListaEditar from '../pages/ListaEditar';
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/inicio" component={Inicio}></Route>
                <Route exact path="/items" component={Items}></Route>
                <Route exact path="/item/new" component={ItemNew}></Route>
                <Route exact path="/lista/new" component={ListaNew}></Route>
                <Route exact path="/lista/edit" component={ListaEditar}></Route>
                <Route exact path="/listas" component={Listas}></Route>
                <Route component={Navbar}></Route>
            </Switch>
        </BrowserRouter>
    )
}
export default App;