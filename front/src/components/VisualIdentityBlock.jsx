import r1 from "../assets/fashion-imagens/r1.svg";
import r2 from "../assets/fashion-imagens/r2.svg";
import { useMediaQuery } from "usehooks-ts";

const VisualIdentityBlock = () => {
    const desktop = useMediaQuery("(min-width: 1024px)");
    return (
        <>
            <div className="py-[85px]">
                <div className="text-center mb-[40px]">
                    <h2 className="uppercase font-semibold text-[30px] leading-[30px] lg:text-[60px] lg:leading-[60px] my-[10px]">
                        Our Approach to fashion design
                    </h2>
                    <p className="text-[15px] text-center m-auto lg:text-[22px] lg:w-[70%]">
                        at elegant vogue, we blend creativity with craftsmanship
                        to create fashion that transcends trends and stands the
                        test of time each design is meticulously crafted,
                        ensuring the highest quelity exqulsite finish
                    </p>
                </div>
                <div className="flex flex-wrap gap-[30px] lg:gap-[4%] justify-center lg:py-[60px]">
                    <img className={`${desktop ? "w-[22%] relative bottom-[25px]" : "w-[40%]"}`} src={r1} alt="" />
                    <img className={`${desktop ? "w-[22%] relative top-[25px]" : "w-[40%]"}`} src={r2} alt="" />
                    <img className={`${desktop ? "w-[22%] relative bottom-[25px]" : "w-[40%]"}`} src={r1} alt="" />
                    <img className={`${desktop ? "w-[22%] relative top-[25px]" : "w-[40%]"}`} src={r2} alt="" />
                </div>
            </div>
        </>
    );
};
export default VisualIdentityBlock;
