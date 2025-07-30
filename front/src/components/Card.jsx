import cart from "../assets/imagens/cart.svg";
import favorites from "../assets/imagens/favorites.svg";
import { useDevice } from "../contexts/DeviceContext";
import { useFavorites } from "../contexts/FavoritesContext";
import { useCart } from "../contexts/CartContext";

const Card = ({ img, details, inline }) => {
  const { desktop } = useDevice();
  const { handleFavorites } = useFavorites();
  const { handleCart } = useCart();

  return (
    <>
      <div
        className={`tracking-normal min-w-[45%] ${
          inline
            ? "lg:min-w-[46%] lg:mx-[2%] 2xl:min-w-[29.33%]"
            : "lg:min-w-[30.33%] lg:mx-[1.5%] 2xl:min-w-[22%]"
        }`}
      >
        <div className="w-[100%] relative">
          <img className="w-[100%]" src={img} alt="" />
          {(details || !desktop) && (
            <div className="absolute bottom-[1%] w-[25%] left-[50%] translate-x-[-50%] bg-[#ffffff30] p-[1px] shadow-xl gap-[2%] rounded-[50px] flex">
              <img onClick={()=>handleFavorites()} className="p-[2px]" width="49%" src={favorites} alt="" />
              <img onClick={()=>handleCart()} className="p-[2px]" width="49%" src={cart} alt="" />
            </div>
          )}
        </div>
        {(details || !desktop) && (
          <>
            <span className="text-[10px] lg:text-[15px] text-[#00000066]">
              cotton T Shirt
            </span>
            <div className="text-[12px] lg:text-[18px] font-semibold flex justify-between">
              <span>Full Sleeve Zipper</span>
              <span>$ 199</span>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Card;
