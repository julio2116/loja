import { useEffect } from "react";
import f1 from "../assets/imagens-temp/f1.svg";
import f2 from "../assets/imagens-temp/f2.svg";
import Card from "./Card";
import { useMediaQuery } from "usehooks-ts";

const Gallery = ({ details, inline, click, onLimit, id }) => {
  const gallery = document.querySelector(`#gallery-${id}`);
  const gallerySize = gallery?.offsetWidth;
  const desloc = click * gallerySize;
  const array = [f1, f2, f1, f2, f1, f2, f1, f2]

  useEffect(()=>{
    onLimit({ max: array.length / Number.parseInt((inline ? 2 : 3)), min: 1 });
  },[onLimit, array.length, inline])

  const desktop = useMediaQuery("(min-width: 1024px)");
  const desktopClasses = "flex transition-transform duration-500 ease-in-out transform";
  const mobileClasses = "flex gap-[8px] overflow-auto scroll-hidden";
  const myClasses = desktop ? desktopClasses : mobileClasses;

  return (
    <>
      <div className="lg:min-w-[64%] overflow-hidden">
        <div
          className={myClasses}
          id={`gallery-${id}`}
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
