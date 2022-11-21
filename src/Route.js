import { BrowserRouter,Route,Routes } from "react-router-dom";
import Invitacion from "./components/invitacion/invitacion";
import Home from "./Home"

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Home/>}/>
                <Route path="/invitacion" element={<Invitacion/>}/>
            </Routes>
        </BrowserRouter>
        );
}

export default Router