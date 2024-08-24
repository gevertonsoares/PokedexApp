import ContainerCardPokemon from "../components/functionals/ContainerCard";
import { Footer } from "../components/functionals/Footer";
import Navbar from "../components/functionals/Navbar";



export default function Home() {
    return(
        <>
            <Navbar />
            <ContainerCardPokemon />
            <Footer />
        </>
    )
}