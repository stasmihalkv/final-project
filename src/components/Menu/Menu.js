import React from 'react';
import './../../bootstrap.css';
import styles from './menu.css';
import {
    Link
  } from "react-router-dom";


function Menu(){
    return (   
        <nav className="menu">
            <Link to="/AllPokemons" className={styles.menuItem}>All pokemons</Link>
            <Link to="/CaughPokemons" className={styles.menuItem}>Caugh pokemons</Link>
        </nav>
    )
}
export default Menu

