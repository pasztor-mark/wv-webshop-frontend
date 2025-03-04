import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import PageLayout from "@/components/PageLayout.tsx";
import Authenticate from "@/pages/Authenticate.tsx";
import Home from './pages/Home';
import NewPiece from './pages/NewPiece';

function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path={"/"}>
                    <Route path={"auth"}>
                           <Route index element={<Authenticate/>}/>
                    </Route>
                    <Route path={"*"} element={<PageLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={"new"} element={<NewPiece/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
