//import data from '../../db2.json'

const CATCH_POKEMON = "CATCH_POKEMON";
const RENDER_POKEMON = "RENDER_POKEMON";



const initialState = {
  pokemons: []
}


let reducer = (state = initialState.pokemons, action) => {
  let pokemons = state ;
  
  if (action.type === RENDER_POKEMON){
     state = action.pokemons;
  }
  else if (action.type === CATCH_POKEMON){
    pokemons[action.id] = {...pokemons[action.id], isCaugh:true};
    pokemons[action.id] = {...pokemons[action.id], timeOfCapture : new Date().toLocaleDateString()};
     state = pokemons;
}
return state

}


export default reducer


