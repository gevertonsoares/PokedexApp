import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemons } from "../../config/services/getPokemons.service";
import { GlobalState } from "..";
import { Pokemon } from "../types/pokemonType";

export interface PokemonInterface {
    pokemons: Pokemon[];
    page: number;
    pages: number;
    loading: boolean;
}

const initialState: PokemonInterface = {
    pokemons: [],
    page: 1,
    pages: 0,
    loading: false
}

export const fetchGetPokemons = createAsyncThunk(
    "/list-pokemons/get",
    async (page: number) => {
        const response = await getPokemons(page);
        const pokemonList = []
        
        for(const info of response.results) {
            const infoPokemon = await fetch(info.url);
            const data = await infoPokemon.json();

            pokemonList.push(data)
        }    

        return {
            pokemonList: pokemonList,
            page: page,
            totalPages: Math.ceil(response.count / 20)
        }
    }
)

const listAllPokemonsSlice = createSlice({
    name: 'list-pokemons',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchGetPokemons.pending,
            (state) => {
                state.loading = true
            }
        );
        builder.addCase(
            fetchGetPokemons.rejected,
            (state) => {
                state.loading = false
            }
        );
        builder.addCase(
            fetchGetPokemons.fulfilled,
            (state, action) => {
                state.pokemons = action.payload.pokemonList;
                state.page = action.payload.page;
                state.pages = action.payload.totalPages;
            }
        );
    },
});

export default listAllPokemonsSlice.reducer;
export const selectPokemons = (store: GlobalState) => store.pokemons.pokemons;
export const selectPage = (store: GlobalState) => store.pokemons.page;
export const selectTotalPages = (store: GlobalState) => store.pokemons.pages;
export const selectLoading = (store: GlobalState ) => store.pokemons.loading;
