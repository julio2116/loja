const Card = ({img, details, inline}) => {
  return (
    <>
      <div className={`tracking-normal min-w-[45%] ${inline ? "lg:min-w-[48%]" : "lg:min-w-[31.76%]"}`}>
        <img className="w-[100%]" src={img} alt="" />
        {details &&
        <>
        <span className="text-[10px] lg:text-[15px] text-[#00000066]">cotton T Shirt</span>
        <div className="text-[12px] lg:text-[18px] font-semibold flex justify-between">
          <span>Full Sleeve Zipper</span>
          <span>$ 199</span>
        </div>
        </>
        }
      </div>
    </>
  );
};
export default Card