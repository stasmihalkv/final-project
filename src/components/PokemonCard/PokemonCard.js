import React from 'react';
import { connect } from 'react-redux';
import { withRouter}  from 'react-router-dom';
import styles from './PokemonCard.css';


class PokemonCard extends React.Component{


  //let animal = images(`./${someVariable}.png`);

    render(){ 
        //const images = require.context('../../../public/pokemons/1.png', true);
        const {name, id, caugh, updateSelectData, updateCatchData} = this.props;
        let cardBtn = caugh ? 'Caugh (' : 'Catch me';
        return(   
        <div>
            <div сlassname={styles.pokemonImg} onClick={() => updateSelectData(id)}>
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
  
//    <img src={process.env.PUBLIC_URL + `/pokemons/${id}.png`} alt={name}/>