import { configureStore } from "@reduxjs/toolkit";
import listAllPokemonsReducer from './modules/getPokemonSlice'


export const store = configureStore({
    reducer: {
        pokemons: listAllPokemonsReducer
    }
})

export type GlobalState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch