import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../types/pokemonType";
import { GlobalState } from "..";


export const pokedexAdapter = createEntityAdapter({
    selectId: (pokemon: Pokemon) => pokemon.id
})

const pokedexSlice = createSlice({
    name: 'pokedex',
    initialState: pokedexAdapter.getInitialState(),
    reducers: {
        pokedexAdd: pokedexAdapter.addOne,
        pokedexRemove: pokedexAdapter.removeOne
    }
})

export default pokedexSlice.reducer
export const {pokedexAdd, pokedexRemove } = pokedexSlice.actions
export const { 
    selectAll: listPokedex, 
    selectById: selectPokemonById,
    selectIds: selectPokemonIds,
} = pokedexAdapter.getSelectors((store: GlobalState) => store.pokedex)

