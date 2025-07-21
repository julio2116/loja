import menu from "../public/imagens/menu.svg";
import icone from "../public/imagens/icone.svg";
import cart from "../public/imagens/cart.svg";
import user from "../public/imagens/user.svg";
import favorites from "../public/imagens/favorites.svg";
import { useMediaQuery } from "usehooks-ts";
import MenuHeader from "./MenuHeader";

const Header = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      <header className="relative pt-[26px]">
        <img
          className="absolute top-[65%] left-[50%] translate-[-50%] lg:w-[50px]"
          src={icone}
          alt=""
        />
        <div className="flex justify-between">
          <div className="flex gap-[35px] items-center">
            {desktop ? <MenuHeader /> : <img width="35px" src={menu} alt="" />}
          </div>
          <div className="flex gap-[10px] lg:gap-[30px]">
            <img src={favorites} className="hidden w-[41px] lg:block" alt="" />
            <div className="flex relative lg:mr-[5px]">
              <span className="py-[12px] right-[-5px] relative px-[15px] bg-[black] text-[white] rounded-[25px] text-[12px] hidden lg:block">
                Cart
              </span>
              <img src={cart} alt="" />
            </div>
            <img src={user} alt="" />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
