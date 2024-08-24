import { Provider } from "react-redux";
import { GlobalStyled } from "./config/global/GlobalStyled";
import { AppRoutes } from "./config/routes/AppRoutes";
import { store } from "./store";



export function App() {
  return (
    <Provider store = {store}>
      <GlobalStyled />
      <AppRoutes />
    </Provider>
  )
}


