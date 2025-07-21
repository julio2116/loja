import maior from "../public/imagens/maior.png";
import menor from "../public/imagens/menor.png";

const NextItems = ({align}) => {
  return (
    <>
    <div className={`flex gap-[10px] ${align && "justify-center mt-[25px]"}`}>
      <div className=" border border-[#00000044] p-[10px] flex justify-center items-center h-fit">
        <img className="w-[15px] z-50 relative" src={maior} alt="" />
      </div>
      <div className=" border border-[#00000044] p-[10px] flex justify-center items-center h-fit">
        <img className="w-[15px] z-50 relative" src={menor} alt="" />
      </div>
    </div>
    </>
  );
};
export default NextItems;
