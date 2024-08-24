import { isAxiosError } from "axios";
import { apiPokemon } from "./client-http";


export async function getPokemons(page: number) {
    const limit = 20
    const offset = (page - 1) * limit
    try {
        const response = await apiPokemon.get(`/pokemon?limit=${limit}&offset=${offset}`)
        return {
            results: response.data.results,
            count: response.data.count
        }

    } catch (err:unknown) {
        if (isAxiosError(err)) {
            return err.response?.data
        }
    }
}



