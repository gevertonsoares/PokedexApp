import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Typography } from "@mui/material"
import { Pokemon } from "../../store/types/pokemonType"


interface PokemonModalProps {
    open: boolean
    closeModal: () => void
    pokemon: Pokemon | null
}

type PokemonType = 
    | 'fire' | 'water' | 'grass' | 'electric' | 'ice'
    | 'fighting' | 'poison' | 'ground' | 'flying' | 'psychic'
    | 'bug' | 'rock' | 'ghost' | 'dragon' | 'dark'
    | 'steel' | 'fairy' | 'normal';

const typeColors:  Record<PokemonType, string> = {
    fire: '#EE8130',
    water: '#6390F0',
    grass: '#7AC74C',
    electric: '#F7D02C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
    normal: '#ffff'
};

export function ModalPokemon({open, closeModal, pokemon}: PokemonModalProps) {
    
    return(
        <Dialog open={open} onClose={closeModal} maxWidth="sm" fullWidth>
        <Box sx={{ background: 'linear-gradient(to top, #f9f9f9 80%, #0075BE )', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <DialogTitle sx={{ display: 'flex', width: '100%' }}>
                <Typography variant="body2">
                    N°: {pokemon?.id}
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 150, width: '100%', backgroundColor: '#DFDFDF', borderRadius: '100px' }}>
                    <img
                        src={pokemon?.sprites?.other?.['official-artwork']?.front_default || ''}
                        alt={pokemon?.name}
                        style={{ height: 150, width: 150, borderRadius: '100px', objectFit: 'cover' }}
                    />
                </Box>
                <Typography gutterBottom variant="h5" component="div" sx={{ mt: 2, textAlign: 'center' }}>
                    {pokemon?.name}
                </Typography>
                <Divider />
                <Typography variant="body2" sx={{ textAlign: 'center' }}>
                    Height: {pokemon?.height ? (pokemon.height / 10).toFixed(2) : 'N/A'} m
                </Typography>
                <Divider />
                <Typography variant="body2" sx={{ textAlign: 'center' }}>
                    Weight: {pokemon?.weight ? (pokemon.weight / 10).toFixed(1) : 'N/A'} kg 
                </Typography>
                <Divider />
                <Typography variant="body2" sx={{ textAlign: 'center' }}>
                    Abilities: {pokemon?.abilities.map((a, index) => (
                        <span key={index}> {a.ability.name} {index < pokemon.abilities.length - 1 ? ', ' : ''}</span>
                    ))} 
                </Typography>
                <Divider />
                <Box>
                    {pokemon?.stats.map((stat, index) => (
                        <Box key={stat.stat.name}>
                            <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: {stat.base_stat}
                            </Typography>
                            {index < pokemon.stats.length - 1 && <Divider />}
                        </Box>
                    ))}
                </Box>
                <Divider />
                <Box>
                    {pokemon?.types.map((t, index) => (
                        <Box key={t.type.name}>
                            <Typography variant="body2" sx={{ textAlign: 'center', background: typeColors[t.type.name as PokemonType] || '#000' }}>
                                {t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)}
                            </Typography>
                            {index < pokemon.stats.length - 1 && <Divider />}
                        </Box>
                    ))}
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeModal} color="primary">Close</Button>
            </DialogActions>
        </Box>
    </Dialog>
    )
}