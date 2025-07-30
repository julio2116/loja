import { BrowserRouter, Routes, Route } from "react-router";
import AllProducts from "../components/AllProducts";
import CreateItem from "../components/CreateItem";
import HomePage from "../paginas/HomePage";
import Layout from "../components/Layout";
import { DeviceProvider } from "../contexts/DeviceContext";
import { FavoritesProvider } from "../contexts/FavoritesContext";
import { CartProvider } from "../contexts/CartContext";

const Rotas = () => {
  return (
    <>
      <CartProvider>
        <FavoritesProvider>
          <DeviceProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="/produtos" element={<AllProducts />} />
                  <Route path="/novoproduto" element={<CreateItem />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </DeviceProvider>
        </FavoritesProvider>
      </CartProvider>
    </>
  );
};

export default Rotas;
