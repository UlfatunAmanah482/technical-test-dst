import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { pokemonReducer } from "./reducers";

const rootReducer = combineReducers({
    reducer: pokemonReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))