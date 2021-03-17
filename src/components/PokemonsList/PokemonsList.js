import React from 'react';
import './PokemonsList.css';
import PokemonCard from '../PokemonCard/PokemonCard.js';
import PokemonInfo from '../PokemonInfo/PokemonInfo.js';
import { withRouter}  from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios';

class PokemonList extends React.Component{

      state = {
        flag:true,
        pokemons: []
      }

      componentDidMount() {
        axios.get(`http://localhost:3000/pokemons`)
          .then(res => {
            const pokemons = res.data;
            this.props.dispatch({
              type: "RENDER_POKEMON",
              pokemons: res.data
            });
          })
      }
    
      selectPokemon = (i) =>{
        this.setState({
          flag : !this.state.flag
        })
        this.props.history.push(`/AllPokemons/${i}`)     
      }

      catchPokemon = (i) => {    
        let pokemons = this.props.currentStore;
        this.setState({pokemons}); 
        this.props.dispatch({
          type: "CATCH_POKEMON",
          id: i-1
        });
        
      }

      render(){ 
        const pokemons = this.props.currentStore.map((item)=>{      
          return(
              <div className="item" key={item.id}> 
                  <PokemonCard name={item.name} 
                              id={item.id}
                              caugh={item.isCaugh}
                              updateSelectData={this.selectPokemon}
                              updateCatchData={this.catchPokemon}
                              matchId={this.props.matchId}/>
              </div>
          )
        })
        if(this.state.flag){
          return (
            <div className="itemContainer">
              {pokemons} 
            </div>
          )
        }
        else if(!this.state.flag){
          return(
           <PokemonInfo/>
        )} 
      }  
}


export default connect(
  state=>({
    currentStore:state
  })
) (PokemonList)
withRouter(PokemonList)