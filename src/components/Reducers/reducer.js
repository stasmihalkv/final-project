import data from '../../db.json'

const RENDER_POKEMON = "RENDER_POKEMON";
const CATCH_POKEMON = "CATCH_POKEMON";


const initialState = {
  pokemons: []
}

let reducer = (state = initialState.pokemons, action) => {

  if(action.type === RENDER_POKEMON){
    state = action.payload
  }
  else if (action.type === CATCH_POKEMON){
    state[action.payload] = {...state[action.payload], isCaugh:true, timeOfCapture : new Date().toLocaleDateString()};
  }
 return state

}

export default reducer


