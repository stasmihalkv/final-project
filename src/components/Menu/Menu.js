import React from 'react';
import './../../bootstrap.css';
import './menu.css';
import {
    Link
  } from "react-router-dom";


function Menu(){
    return (   
        <nav className="menu">
            <Link to="/AllPokemons" className="menuItem">All pokemons</Link>
            <Link to="/CaughPokemons" className="menuItem">Caugh pokemons</Link>
        </nav>
    )
}
export default Menu

