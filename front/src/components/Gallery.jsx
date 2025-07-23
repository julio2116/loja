import { useEffect } from "react";
import f1 from "../public/imagens-temp/f1.svg";
import f2 from "../public/imagens-temp/f2.svg";
import Card from "./Card";
import { useMediaQuery } from "usehooks-ts";

const Gallery = ({ details, inline, click, onLimit }) => {
  const gallery = document.querySelector("#gallery");
  const gallerySize = gallery?.offsetWidth;
  const desloc = click * gallerySize;
  const array = [f1, f2, f1, f2, f1, f2, f1, f2]

  useEffect(()=>{
    onLimit({ max: array.length / 2, min: 1 });
  },[onLimit, array.length])

  const desktop = useMediaQuery("(min-width: 1024px)");
  const desktopClasses = "flex gap-[2.8%] transition-transform duration-500 ease-in-out transform";
  const mobileClasses = "flex gap-[8px] overflow-auto scroll-hidden";
  const myClasses = desktop ? desktopClasses : mobileClasses;

  return (
    <>
      <div className="lg:min-w-[64%] overflow-hidden">
        <div
          className={myClasses}
          id="gallery"
          style={{ transform: `translateX(${desloc}px)` }}
        >
          {array.map((item, index) => (
            <Card key={index} img={item} details={details} inline={inline} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
