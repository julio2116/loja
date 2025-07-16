import f1 from "../public/imagens-temp/f1.svg";
import f2 from "../public/imagens-temp/f2.svg";
import Card from "./Card";

const Gallery = () => {
  return (
    <>
      <div className="flex gap-[8px] overflow-auto scroll-hidden">
        {[f1, f2, f1, f2].map(item=>(
            <Card img={item}/>
        ))}
      </div>
    </>
  );
};

export default Gallery;
