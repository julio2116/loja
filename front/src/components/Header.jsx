import menu from "../public/imagens/menu.svg";
import icone from "../public/imagens//icone.svg";
import cart from "../public/imagens//cart.svg";
import user from "../public/imagens//user.svg";

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
