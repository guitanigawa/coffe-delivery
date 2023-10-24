import { BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import Checkout from "./pages/Checkout"
import DefaultLayout from "./layouts/DefaultLayout"

export default function Router(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}