import React from 'react';
import './pokemonInfo.css';
import { connect } from 'react-redux';

class PokemonInfo extends React.Component{
    
    render(){
        const {currentStore, historyId} = this.props

        return(
            <div className="pokemonInfoContainer"> 
                <h1>Pokemon Info</h1>      
                <div сlassname="pokemonInfoImg">
                    <img src={`../../../public/pokemons/${historyId}.png`} alt={currentStore[historyId-1].name}/>                 
                </div>
                <table className="table table-striped">
                    <tbody>  
                        <tr>
                            <th scope="row">Id:</th>
                            <td>{currentStore[historyId-1].id}</td>    
                        </tr>
                        <tr>
                            <th scope="row">Name:</th>
                            <td>{currentStore[historyId-1].name}</td>    
                        </tr>
                        <tr>
                            <th scope="row">Status:</th>
                            <td>{currentStore[historyId-1].isCaugh ? "Caugh" : "Not Caugh"}</td>    
                        </tr>
                        <tr>
                            <th scope="row">Date of capture:</th>
                            <td>{currentStore[historyId-1].timeOfCapture ? currentStore[historyId-1].timeOfCapture : "-"}</td>    
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(
    state=>({
      currentStore:state
    }),
  
  ) (PokemonInfo)
