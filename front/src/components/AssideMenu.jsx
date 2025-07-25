import { useState } from "react";
import { Link } from "react-router";

const AssideMenu = ({ img, items }) => {
    const [menuVisivel, setMenuVisivel] = useState(false);

    return (
        <>
            <div onClick={() => setMenuVisivel(true)}>
                <img width="35px" src={img} alt="" />
            </div>
            <div
                onClick={() => setMenuVisivel(false)}
                className={`h-[100vh] w-[110%] fixed top-0 left-[-5%] z-[49] transition-opacity duration-500 bg-[#00000020] ${
                    menuVisivel ? "block opacity-100" : "hidden opacity-0"
                }`}
            ></div>
            <ul
                className={`w-[45%] h-[100vh] z-50 bg-[#00000040] backdrop-blur-xs fixed top-0 transition-all duration-500 pl-[20px] pt-[30px] flex flex-col gap-[15px] font-semibold ${
                    menuVisivel ? "left-0" : "-left-[45%]"
                }`}
            >
                {items.map((item, i) => (
                    <Link to=""><li key={i}>{item}</li></Link>
                ))}
            </ul>
        </>
    );
};

export default AssideMenu;
