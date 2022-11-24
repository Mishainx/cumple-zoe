import { BrowserRouter,Route,Routes } from "react-router-dom";
import Invitacion from "./components/invitacion/invitacion";
import Home from "./Home"
import Admin from "./components/admin/admin";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Home/>}/>
                <Route path="/invitacion" element={<Invitacion/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
        </BrowserRouter>
        );
}

export default Router