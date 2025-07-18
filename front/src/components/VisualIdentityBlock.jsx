import r1 from "../public/fashion-imagens/r1.svg";
import r2 from "../public/fashion-imagens/r2.svg";

const VisualIdentityBlock = () => {
    return (
        <>
            <div className=" py-[65px]">
                <div className="text-center mb-[40px]">
                    <h2 className="uppercase font-semibold text-[30px] leading-[30px] my-[10px]">
                        Our Approach to fashion design
                    </h2>
                    <p className="text-[15px] text-center">
                        at elegant vogue, we blend creativity with craftsmanship
                        to create fashion that transcends trends and stands the
                        test of time each design is meticulously crafted,
                        ensuring the highest quelity exqulsite finish
                    </p>
                </div>
                <div className="flex flex-wrap gap-[20px] justify-center">
                    <img className="w-[40%]" src={r1} alt="" />
                    <img className="w-[40%]" src={r2} alt="" />
                    <img className="w-[40%]" src={r1} alt="" />
                    <img className="w-[40%]" src={r2} alt="" />
                </div>
            </div>
        </>
    );
};
export default VisualIdentityBlock;
