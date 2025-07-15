import menu from "../assets/imagens/menu.svg";
import icone from "../assets/imagens/icone.svg";
import cart from "../assets/imagens/cart.svg";
import user from "../assets/imagens/user.svg";

const Header = () => {
  return (
    <>
      <header style={{position: 'relative', paddingTop: '26px'}}>
        <img style={{position: 'absolute', top: '31px', left: '50%', transform: 'translate(-50%)'}} src={icone} alt="" />
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <img src={menu} alt="" />
          <div style={{display: 'flex', gap: '5px'}}>
            <img src={cart} alt="" />
            <img src={user} alt="" />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
