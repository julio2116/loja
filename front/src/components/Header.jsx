import menu from "../assets/imagens/menu.svg";
import icone from "../assets/imagens/icone.svg";
import cart from "../assets/imagens/cart.svg";
import user from "../assets/imagens/user.svg";

const Header = () => {
  return (
    <>
      <header className="relative pt-[26px]">
        <img className="absolute top-[65%] left-[50%] translate-[-50%]" src={icone} alt="" />
        <div className="flex justify-between">
          <img src={menu} alt="" />
          <div className="flex gap-[5px]">
            <img src={cart} alt="" />
            <img src={user} alt="" />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
