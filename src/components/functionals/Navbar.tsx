import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Home as IconHome } from '@mui/icons-material';
import { CardMedia,  } from '@mui/material';
import PokemonNav from '../../assets/pokemon-23.svg'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
      <AppBar sx={{background: 'linear-gradient(to right, #FFCC00 50%, #0A285F )'}} color='transparent' component='header' position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
          <IconButton
            component={Link}
            to='/'
            size="large"
            edge="end"
            color= 'error'
            aria-label="menu"
            sx={{ mx: 5 }}
          >
            <IconHome />
            
          </IconButton>
          <CardMedia
            component='img'
            sx={{ width: 150, }}
            image={PokemonNav} 
            alt='LogoPokemon'
          />
          <Button component={Link} to='/pokedex' size='medium'  sx={{ mr: 5, color: 'white' }}> 
            <b>Show Favorites</b> 
          </Button>
        </Toolbar>
      </AppBar>
  );
}