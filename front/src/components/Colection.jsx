import f1 from "../public/imagens-temp/f1.svg";
import f2 from "../public/imagens-temp/f2.svg";
import seta from "../public/imagens/seta.svg";
import setaDireita from "../public/imagens/seta-direita.svg"

const Collection = () => {
  return (
    <>
      <div className="my-[45px]">
        <h1 className="font-sans font-semibold text-[45px] leading-[36px] mb-[15px]">
          NEW COLLECTION
        </h1>
        <div className="text-[16px]">Summer</div>
        <div className="text-[16px]">2025</div>
      </div>
      <div className="flex items-center justify-end gap-[5px]">
        <img className="rotate-[225deg]" src={seta} width="20px" alt="" />
        <span className="text-[8px] text-[#00000066] font-semibold">
          arrasta pro lado
        </span>
      </div>
      <div className="flex gap-[8px] overflow-auto scroll-hidden">
        <div className="tracking-normal min-w-[45%]">
          <img src={f1} alt="" />
          <span className="text-[10px] text-[#00000066]">cotton T Shirt</span>
          <div className="text-[12px] font-semibold flex justify-between">
            <span>Full Sleeve Zipper</span>
            <span>$ 199</span>
          </div>
        </div>
        <div className="tracking-normal min-w-[45%]">
          <img src={f2} alt="" />
          <span className="text-[11px] text-[#00000066]">cotton T Shirt</span>
          <div className="text-[12px] font-semibold flex justify-between">
            <span>Full Sleeve Zipper</span>
            <span>$ 199</span>
          </div>
        </div>
        <div className="tracking-normal min-w-[45%]">
          <img src={f1} alt="" />
          <span className="text-[11px] text-[#00000066]">cotton T Shirt</span>
          <div className="text-[12px] font-semibold flex justify-between">
            <span>Full Sleeve Zipper</span>
            <span>$ 199</span>
          </div>
        </div>
      </div>
      <button className="flex gap-[17px] text-[12px] tracking-normal bg-[#D9D9D9] py-[7px] px-[17px] my-[21px]">
        Go To Shop
        <img src={setaDireita} alt="" />
      </button>
    </>
  );
};

export default Collection;
