import { configureStore } from "@reduxjs/toolkit";
import listAllPokemonsReducer from './modules/getPokemonSlice'
import  pokedexReducer  from "./modules/pokedexSlice";


export const store = configureStore({
    reducer: {
        pokemons: listAllPokemonsReducer,
        pokedex: pokedexReducer
    }
})

export type GlobalState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch