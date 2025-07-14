import {BrowserRouter, Routes, Route} from "react-router";
import AllProducts from "../components/AllProducts";

const Rotas = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/produtos" element={<AllProducts />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rotas