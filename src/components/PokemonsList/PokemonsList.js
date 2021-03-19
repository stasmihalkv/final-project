import React from 'react';
import './PokemonsList.css';
import PokemonCard from '../PokemonCard/PokemonCard.js';
import PokemonInfo from '../PokemonInfo/PokemonInfo.js';
import { withRouter}  from 'react-router-dom';
import { connect } from 'react-redux';
import { setPokemonAction, catchPokemonAction } from '../actions.js';
import axios from 'axios';
import data from '../../db.json'
class PokemonList extends React.Component{

      state = {
        flag:true,
  
      }

      componentDidMount() {
        axios.get(`http://localhost:3000/pokemons/`)
          .then(res => {
            this.props.setPokemonAction(res.data)
          })
      }
    
      selectPokemon = (i) =>{
        this.setState({
          flag : !this.state.flag
        })
        this.props.history.push(`/AllPokemons/${i}`)     
      }

      catchPokemon = (i) => {    
        let pokemons = this.props.pokemons;
        this.setState({pokemons})
        this.props.catchPokemonAction(i-1)
        
      }

      render(){ 
        const pokemons = this.props.pokemons.map((item)=>{      
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
              
const mapStateToProps = (state) =>{
  return {
    pokemons:state
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    setPokemonAction: (val) => dispatch(setPokemonAction(val)),
    catchPokemonAction: (val) => dispatch(catchPokemonAction(val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
withRouter(PokemonList)