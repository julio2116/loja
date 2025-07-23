import { useEffect } from "react";
import menor from "../public/imagens/maior.png";
import maior from "../public/imagens/menor.png";

const NextItems = ({ align, onClick, click, limit, id }) => {
    useEffect(() => {
        document.querySelector(`#prev-${id}`)?.setAttribute("disabled", "true");
    }, []);

    let b = click;

    function handleClick(n) {
        b += n;
        const buttonPrev = document.querySelector(`#prev-${id}`);
        const buttonNext = document.querySelector(`#next-${id}`);
        console.log(b);
        console.log(-limit.max);
        if (b <= -limit.max) {
            buttonNext.setAttribute("disabled", "true");
            return;
        } else {
            buttonNext.removeAttribute("disabled");
        }
        if (b >= limit.min) {
            buttonPrev.setAttribute("disabled", "true");
            return;
        } else {
            buttonPrev.removeAttribute("disabled");
        }

        onClick((prev) => (prev += n));
    }
    return (
        <>
            <div
                className={`flex gap-[10px] ${
                    align && "justify-center mt-[25px]"
                }`}
            >
                <button
                    id={`prev-${id}`}
                    onClick={() => handleClick(1)}
                    className="border border-[#00000044] p-[10px] flex justify-center items-center h-fit"
                >
                    <img
                        className="w-[15px] z-50 relative"
                        src={menor}
                        alt=""
                    />
                </button>
                <button
                    id={`next-${id}`}
                    onClick={() => handleClick(-1)}
                    className="border border-[#00000044] p-[10px] flex justify-center items-center h-fit"
                >
                    <img
                        className="w-[15px] z-50 relative"
                        src={maior}
                        alt=""
                    />
                </button>
            </div>
        </>
    );
};
export default NextItems;
