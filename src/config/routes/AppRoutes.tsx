import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../pages/Home";
import PokedexPage from "../../pages/PokedexPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/pokedex',
        element: <PokedexPage />
    },
])

export function AppRoutes() {
    return <RouterProvider router={router} />
}