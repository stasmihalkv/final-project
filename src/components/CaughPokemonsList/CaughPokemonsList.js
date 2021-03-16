import React from 'react';
//import data from '../db.json';
import { connect } from 'react-redux'

class CatchedPokemons extends React.Component{

    render(){ 
      const template = this.props.currentStore.map((item)=>{    
        if(item.isCaugh){
          return(      
            <div className="item" key={item.id}>
                <div сlassname="pokemonImg">
                    <img src={`../../public/pokemons/${item.id}.png`} alt={item.name}/>
                    <h2>{item.name}</h2>
                </div>
            </div>
          )}
      })
      
        return (
          <div className="itemContainer">
            {template}
          </div> 
        )  
    }
  
}


export default connect(
  state=>({
    currentStore:state
  }),
  dispatch => ({})
) (CatchedPokemons)


//{`../../../public/pokemons/${itemId}.png`}
//{process.env.PUBLIC_URL + `/pokemons/${item.id}.png`}