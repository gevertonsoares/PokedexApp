import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Pagination, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { fetchGetPokemons, selectPage, selectPokemons, selectTotalPages } from "../../store/modules/getPokemonSlice";
import { useEffect } from "react";



export default function ContainerCardPokemon() {
    const dispatch = useAppDispatch()
    const pokemons = useAppSelector(selectPokemons) 
    const page = useAppSelector(selectPage)
    const totalPages = useAppSelector(selectTotalPages)

    
    useEffect(() => {
        dispatch(fetchGetPokemons(page)) 
    },[dispatch, page])

    // console.log(pokemons);

    const handlePageChange = (event, value) => {
        dispatch(fetchGetPokemons(value));
    };
   
    
    
    return (
        <Container fixed component='section' sx={{marginTop: '2rem'}}> 
                <Box sx={{ width: '100%' }}>
                    <Grid gap={2} justifyContent="center" container>
                        { pokemons.map((pokemon) => (

                            <Card key={pokemon.id}  sx={{ minWidth: 200,  backgroundColor:'#0075BE', color:'#ffff'}}> 
                                <CardActions sx={{justifyContent: 'space-between'}}>
                                    <Typography variant="body2" color="white">
                                        N°:&nbsp;{pokemon.id}
                                    </Typography>
                                    <Button size="small" sx={{color: 'white'}}>
                                        <FavoriteBorderIcon />
                                    </Button>
                                </CardActions>
                                <Box sx={{display: 'flex', justifyContent: 'center',alignItems: 'center',height: 150, width: '100%', backgroundColor: '#DFDFDF',borderRadius: '100px'}}>
                                    <CardMedia
                                        component='img'
                                        sx={{ height: 150, width: 150, backgroundColor:'#DFDFDF', borderRadius:'100px', objectFit: 'cover' }}
                                        image={pokemon.sprites != null ? pokemon.sprites.front_default : ''} 
                                        alt={pokemon.name}
                                    />
                                </Box>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {pokemon.name}
                                    </Typography>
                                    <Typography variant="body2" color="white">
                                        Height: &nbsp;{pokemon.height}&nbsp;decimeters
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{justifyContent: 'end'}}>
                                    <Button  size="medium" sx={{color: '#FFCC00'}}>Show Details</Button>
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
                    />
                </Box>
        </Container>
    )
}