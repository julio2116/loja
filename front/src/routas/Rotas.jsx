import {BrowserRouter, Routes, Route} from "react-router";
import AllProducts from "../components/AllProducts";
import CreateItem from "../components/createItem";

const Rotas = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/produtos" element={<AllProducts />} />
                    <Route path="/novoproduto" element={<CreateItem />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Rotas