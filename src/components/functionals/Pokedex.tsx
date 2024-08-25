import { Box, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography, Button, Divider } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { listPokedex, pokedexRemove } from "../../store/modules/pokedexSlice"; 
import { Pokemon } from "../../store/types/pokemonType";
import { ModalPokemon } from "../functionals/ModalPokemon";
import { useState } from "react";
import  snorlax from "../../assets/snorlax.svg";
import DeleteIcon from '@mui/icons-material/Delete';


export default function Pokedex() {
    const pokedexPokemons = useAppSelector(listPokedex);
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch()

    const handleOpenModal = (pokemon: Pokemon) => {
        setSelectedPokemon(pokemon);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
        setSelectedPokemon(null);
    };

    const handleRemovePokedex = (pokemon: Pokemon) => {
        dispatch(pokedexRemove(pokemon.id));
    };

    return (
        <Container fixed sx={{ marginTop: '2rem' }}>
            <Typography variant="h4"  sx={{ marginBottom: '2rem', textAlign: 'center', color: '#0075BE' }}>
                Your Pokedex
            </Typography>
            <Divider sx={{ background: '#0075BE' }} />
            <Box sx={{ width: '100%' }}>
                {pokedexPokemons.length === 0 ? (
                    <Typography variant="h6" sx={{ marginTop: '2rem', textAlign: 'center', color: '#0075BE'}}>
                        Empty
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                        <img 
                            src={snorlax}
                            alt="No Pokémon" 
                            style={{ maxWidth: '50%', height: 'auto' }}
                        />
                    </Box>
                    </Typography>
                ) : (
                    <Grid gap={2} justifyContent="center" container sx={{marginTop: '2rem'}}>
                        {pokedexPokemons.map((pokemon) => (
                            <Card
                                key={pokemon.id}
                                sx={{
                                    minWidth: 200,
                                    backgroundColor: '#0075BE',
                                    color: '#ffff',
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
                                        backgroundColor: '#004E89'
                                    }
                                }}
                            >
                                <CardActions sx={{ justifyContent: 'space-between' }}>
                                    <Typography variant="body2" color="white">
                                        N°:&nbsp;{pokemon.id}
                                    </Typography>
                                    <Button size="small" sx={{color: 'white'}} onClick={() => handleRemovePokedex(pokemon)}>
                                        <DeleteIcon />
                                    </Button>
                                </CardActions>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 150, width: '100%',
                                        backgroundColor: '#DFDFDF',
                                        borderRadius: '100px'
                                    }}
                                >
                                    <CardMedia
                                        component='img'
                                        sx={{ height: 150, width: 150, backgroundColor: '#DFDFDF', borderRadius: '100px', objectFit: 'cover' }}
                                        image={pokemon.sprites.other?.['official-artwork']?.front_default || ''}
                                        alt={pokemon.name}
                                    />
                                </Box>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'end' }}>
                                    <Button size="medium" sx={{ color: '#FFCC00' }} onClick={() => handleOpenModal(pokemon)}>Show Details</Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Grid>
                )}
            </Box>
            <ModalPokemon open={open} closeModal={handleCloseModal} pokemon={selectedPokemon} />
        </Container>
    );
}
