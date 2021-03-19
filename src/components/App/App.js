import React from 'react';
import Menu from '../Menu/Menu.js';
import CaughPokemons from '../CaughPokemonsList/CaughPokemonsList.js';
import PokemonInfo from '../PokemonInfo/PokemonInfo.js';
import PokemonList from '../PokemonsList/PokemonsList.js';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
  import { connect } from 'react-redux';

  class App extends React.Component{

    render(){   
        return(
          <React.Fragment>                
            <Router>
              <Menu/>
              <Route path="/" exact component={PokemonList}/>  
              <Route path="/AllPokemons" exact component={PokemonList}/>
              <Route path="/AllPokemons/:id"
                     render = { ({match}) => {
                      const { id } = match.params;
                      return <PokemonInfo historyId={id}/> 
                      }}/>   
              <Route path="/CaughPokemons" component={CaughPokemons} />     
            </Router> 
          </React.Fragment> 
        )
      }
  }


  export default connect(
    state=>({
      pokemons:state
    })
  )(App)
  
