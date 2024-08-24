import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { fetchGetPokemons, selectPokemons } from "../../store/modules/getPokemonSlice";
import { useEffect } from "react";



export default function ContainerCardPokemon() {
    const dispatch = useAppDispatch()
    const pokemons = useAppSelector(selectPokemons) 
    
    useEffect(() => {
        dispatch(fetchGetPokemons(1)) 
    },[dispatch])

    // console.log(pokemons);
   
    
    
    return (
        <Container fixed component='section' sx={{marginTop: '2rem'}}> 
                <Box sx={{ width: '100%' }}>
                    <Grid gap={2} justifyContent="center" container>
                        { pokemons.map((pokemon) => (

                            <Card key={pokemon.id}  sx={{ minWidth: 250,  backgroundColor:'#0075BE', color:'#ffff'}}> 
                                <CardActions sx={{justifyContent: 'end'}}>
                                    <Button size="small" sx={{color: 'white'}}>
                                        <FavoriteBorderIcon />
                                    </Button>
                                </CardActions>
                                <CardMedia
                                    component='img'
                                    sx={{ height: 200, backgroundColor:'#DFDFDF', borderRadius:'100px' }}
                                    image={pokemon.sprites != null ? pokemon.sprites.front_default : ''} 
                                    alt={pokemon.name}
                                    />
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
        </Container>
    )
}