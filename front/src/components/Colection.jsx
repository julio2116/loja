import setaDireita from "../public/imagens/seta-direita.svg";
import Gallery from "./Gallery";
import {formatText} from "../utils/formatLetterFunctions"
// A chave subtitle espera receber um objeto no formato: subtitle={{title: "", width: ""}}
// A chave title espera receber um objeto no formato: subtitle={{title: "", uppercase: boolean}}

const Collection = ({ title, subtitle, callToAction }) => {
    [title, subtitle, callToAction].filter(item=>item?.letterCase).forEach(element => {
      if (element) {
          const { text, letterCase } = element;
          element.text = formatText(text, letterCase);
      }
    });
    return (
        <>
            <div className="my-[45px]">
                <h1 className="font-semibold text-[45px] leading-[36px] mb-[15px]">
                    {title.text}
                </h1>
                {subtitle && (
                    <>
                        <div
                            style={{ width: `${subtitle.width}` }}
                            className="text-[16px]"
                        >
                            {subtitle.text}
                        </div>
                    </>
                )}
            </div>
            {callToAction && (
                <div className="flex items-center justify-end gap-[5px]">
                    {callToAction.img && (
                        <img
                            className="rotate-[225deg]"
                            src={callToAction.img}
                            width="20px"
                            alt=""
                        />
                    )}
                    <span className="text-[8px] text-[#00000066] font-semibold">
                        {callToAction.text}
                    </span>
                </div>
            )}
            <Gallery />
            <button className="flex gap-[17px] text-[12px] tracking-normal bg-[#D9D9D9] py-[7px] px-[17px] my-[21px]">
                Go To Shop
                <img src={setaDireita} alt="" />
            </button>
        </>
    );
};

export default Collection;
