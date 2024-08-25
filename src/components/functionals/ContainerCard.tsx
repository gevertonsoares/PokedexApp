import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Pagination, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { fetchGetPokemons, selectPage, selectPokemons, selectTotalPages } from "../../store/modules/getPokemonSlice";
import { ChangeEvent, useEffect, useState } from "react";
import { Pokemon } from "../../store/types/pokemonType";
import { ModalPokemon } from "./ModalPokemon";
import { pokedexAdd } from "../../store/modules/pokedexSlice";



export default function ContainerCardPokemon() {
    const dispatch = useAppDispatch()
    const pokemons = useAppSelector(selectPokemons) 
    const page = useAppSelector(selectPage)
    const totalPages = useAppSelector(selectTotalPages)
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null)
    const [open, setOpen] = useState(false)

    
    useEffect(() => {
        dispatch(fetchGetPokemons(page)) 
    },[dispatch, page])

    const handlePageChange = (event: ChangeEvent<unknown>,value: number) => {
        dispatch(fetchGetPokemons(value));
    };

    const handleOpenModal = (pokemon: Pokemon) => {
        setSelectedPokemon(pokemon);
        setOpen(true);
    }

    const handleCloseModal = () => {
        setOpen(false);
        setSelectedPokemon(null);
    }

    const handleAddPokedex = (pokemon: Pokemon) => {
        dispatch(pokedexAdd(pokemon));
    };
   
    return (
        <Container fixed component='section' sx={{marginTop: '2rem'}}> 
                <Box sx={{ width: '100%' }}>
                    <Grid gap={2} justifyContent="center" container>
                        { pokemons.map((pokemon) => (

                            <Card key={pokemon.id}  
                                sx={{ 
                                    minWidth: 200,  
                                    backgroundColor:'#0075BE', 
                                    color:'#ffff', 
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
                                        backgroundColor: '#004E89'
                                    }
                                }}> 
                                <CardActions sx={{justifyContent: 'space-between'}}>
                                    <Typography variant="body2" color="white">
                                        N°:&nbsp;{pokemon.id}
                                    </Typography>
                                    <Button size="small" sx={{color: 'white'}} onClick={() => handleAddPokedex(pokemon)}>
                                        <FavoriteBorderIcon />
                                    </Button>
                                </CardActions>
                                <Box 
                                    sx={{
                                        display: 'flex', 
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 150, width: '100%', 
                                        backgroundColor: '#DFDFDF',
                                        borderRadius: '100px'}}>
                                    <CardMedia
                                        component='img'
                                        sx={{ height: 150, width: 150, backgroundColor:'#DFDFDF', borderRadius:'100px', objectFit: 'cover' }}
                                        image={pokemon.sprites.other?.['official-artwork']?.front_default || ''} 
                                        alt={pokemon.name}
                                    />
                                </Box>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                                    </Typography>
                                    <Typography variant="body2" color="white">
                                        Height: {pokemon?.height ? (pokemon.height / 10).toFixed(2) : 'N/A'} m
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{justifyContent: 'end'}}>
                                    <Button  size="medium" sx={{color: '#FFCC00'}} onClick={() => handleOpenModal(pokemon)}>Show Details</Button>
                                </CardActions>
                            </Card>               
                        ))}
                    </Grid>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                        variant="outlined"
                        shape="rounded"
                    />
                </Box>
                <ModalPokemon open={open} closeModal={handleCloseModal} pokemon={selectedPokemon} />
        </Container>
    )
}