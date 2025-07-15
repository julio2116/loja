import { BrowserRouter, Routes, Route } from "react-router";
import AllProducts from "../components/AllProducts";
import CreateItem from "../components/createItem";
import HomePage from "../paginas/HomePage";
import Layout from "../components/Layout";

const Rotas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/produtos" element={<AllProducts />} />
            <Route path="/novoproduto" element={<CreateItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rotas;
