import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action";

const initialState = {
  myFavorites: [],
  allCharacters: []
}

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload]
      }

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((fav) => fav.id !== action.payload)
      }
    
    case FILTER:
      if(action.payload === 'all'){
        return {
          ...state,
          myFavorites: state.allCharacters
        }
      }
      return {
        ...state,
        myFavorites: state.allCharacters.filter((fav) => fav.gender === action.payload)
      }
    case ORDER:
      if(action.payload === 'A'){
        return {
          ...state,
          myFavorites: state.allCharacters.sort((a, b) => a.id - b.id)
        }
      }
      return {
        ...state,
        myFavorites: state.allCharacters.sort((a, b) => b.id - a.id)
      }
    default:
      return state;
  }
}

export default rootReducer