import React from 'react';
import { connect } from 'react-redux';
import { withRouter}  from 'react-router-dom';
import './PokemonCard.css';


class PokemonCard extends React.Component{


    render(){ 
        const {name, id, caugh, updateSelectData, updateCatchData} = this.props;
        let cardBtn = caugh ? 'Caugh (' : 'Catch me';
        return(   
        <div>
            <div сlassname="pokemonImg" onClick={() => updateSelectData(id)}>
            <img src={`../../../public/pokemons/${id}.png`} alt={name}/>
            </div>
            <h2>{name}</h2>
            <button className="btn btn-primary catch-btn" 
                    onClick={() => updateCatchData(id)}
                    disabled={caugh ? true : null}>{cardBtn}
            </button>
        </div>
        )
    }
}

export default connect(
    state=>({
      currentStore:state
    })
  ) (PokemonCard)
  withRouter(PokemonCard)
  