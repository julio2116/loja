const Card = ({img}) => {
  return (
    <>
      <div className="tracking-normal min-w-[45%]">
        <img src={img} alt="" />
        <span className="text-[10px] text-[#00000066]">cotton T Shirt</span>
        <div className="text-[12px] font-semibold flex justify-between">
          <span>Full Sleeve Zipper</span>
          <span>$ 199</span>
        </div>
      </div>
    </>
  );
};
export default Card