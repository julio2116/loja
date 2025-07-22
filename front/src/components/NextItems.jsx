import maior from "../public/imagens/maior.png";
import menor from "../public/imagens/menor.png";

const NextItems = ({align, onClick, click, limit}) => {
  function handleClick(n){
    // if(click <= limit.min || click >= limit.max) return
    onClick(prev=> prev += n)
  }
  return (
    <>
    <div className={`flex gap-[10px] ${align && "justify-center mt-[25px]"}`}>
      <div onClick={()=>handleClick(1)} className="border border-[#00000044] p-[10px] flex justify-center items-center h-fit">
        <img className="w-[15px] z-50 relative" src={maior} alt="" />
      </div>
      <div onClick={()=>handleClick(-1)} className="border border-[#00000044] p-[10px] flex justify-center items-center h-fit">
        <img className="w-[15px] z-50 relative" src={menor} alt="" />
      </div>
    </div>
    </>
  );
};
export default NextItems;
