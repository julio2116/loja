import seta from "../public/imagens/seta.svg";
import setaDireita from "../public/imagens/seta-direita.svg";
import Gallery from "./Gallery";

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
      <Gallery />
      <button className="flex gap-[17px] text-[12px] tracking-normal bg-[#D9D9D9] py-[7px] px-[17px] my-[21px]">
        Go To Shop
        <img src={setaDireita} alt="" />
      </button>
    </>
  );
};

export default Collection;
