import { useMediaQuery } from "usehooks-ts";

const Card = ({ img, details, inline }) => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      <div
        className={`tracking-normal min-w-[45%] ${
          inline
            ? "lg:min-w-[46%] lg:mx-[2%]"
            : "lg:min-w-[30.33%] lg:mx-[1.5%]"
        }`}
      >
        <div>
          <img className="w-[100%]" src={img} alt="" />
        </div>
        {(details || !desktop) && (
          <>
            <span className="text-[10px] lg:text-[15px] text-[#00000066]">
              cotton T Shirt
            </span>
            <div className="text-[12px] lg:text-[18px] font-semibold flex justify-between">
              <span>Full Sleeve Zipper</span>
              <span>$ 199</span>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Card;
