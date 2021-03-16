import data from '../../db.json'

const CATCH_POKEMON = "CATCH_POKEMON";


const initialState = {
  pokemons: data.pokemons,
  pageSize: 20,
  currentPage: 1
}


let reducer = (state = initialState.pokemons , action) => {
  let pokemons = initialState.pokemons;
  if (action.type === CATCH_POKEMON){
      pokemons[action.id] = {...pokemons[action.id], isCaugh:true};
      pokemons[action.id] = {...pokemons[action.id], timeOfCapture : new Date().toLocaleDateString()};
      state = pokemons;
  }

  return state
}



export default reducer;




