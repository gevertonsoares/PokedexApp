export interface Pokemon {
    id: number;
    url: string;
    name: string;
    height: number;
    weight: number;
    abilities: Ability[]; 
    sprites: PokemonSprites;
    stats: PokemonStat[];
    types: PokemonType[];
}

interface NamedAPIResource {
    name: string;
    url: string;
}

interface Ability {
    is_hidden: boolean;
    slot: number;
    ability: NamedAPIResource;
}

interface PokemonSprites {
    front_default: string;
    other: {
        ['official-artwork']: {
            front_default: string;
        }
    }
}

interface PokemonType {
    slot: number;
    type: NamedAPIResource;
}

interface PokemonStat {
    stat: NamedAPIResource;
    effort: number;
    base_stat: number;
}
