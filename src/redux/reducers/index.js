import { GET_DETAIL_POKEMON } from "../constants/index";

const initialState = {
    pokemon: ""
}

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAIL_POKEMON:
            return {
                ...state,
                pokemon: action.payload.data
            }
    
        default:
            return state;
    }
}