import CallToAction from "./CallToAction";
import Gallery from "./Gallery";
import { Link } from "react-router";
import { formatText } from "../utils/formatText";
import { useMediaQuery } from "usehooks-ts";
import NextItems from "./NextItems";
import { useState } from "react";
// As chaves deste componente esperam receber um objeto no formato: subtitle={{title: "", width: ""}}
//subchaves validas: text, img, lettercase, width

const Collection = ({
  title,
  subtitle,
  callToAction,
  button,
  link,
  countItems,
  splitTitle,
  childrenbefore,
  children,
  inline = false,
  cardDetails,
  align,
  id
}) => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const newTitle = formatText(title.text, splitTitle);
  const [click, setClick] = useState(0);
  const [limit, setLimit] = useState({min: 1, max: 1});

  return (
    <>
      <div
        className={`${
          inline && desktop && "flex gap-[20px]"
        } lg:mt-[45px] lg:mb-[10px] lg:justify-between`}
      >
        <div className="relative w-fit lg:flex lg:flex-col justify-between ">
          <div className={`${!inline && desktop && "lg:mb-[30px]"}`}>
            <h1
              className={`${
                title?.letterCase || ""
              } font-semibold text-[2.5rem] lg:text-[3rem] xl:text-[4rem] lg:leading-[52px] leading-[40px] mb-[10px] mt-[45px] lg:mt-[0] lg:mb-[0]`}
            >
              {newTitle.map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
            </h1>
            {countItems && (
              <span className="text-[#000E8A] font-extrabold absolute top-[25%] left-[100%]">
                (50)
              </span>
            )}
            {subtitle && (
              <>
                <div
                  style={{ width: `${subtitle.width}` }}
                  className={`${subtitle.letterCase} text-[16px]`}
                >
                  {subtitle.text}
                </div>
              </>
            )}
          </div>
          {button && desktop && (
            <div className="flex justify-between">
              <button
                className={`${button.letterCase} flex gap-[17px] lg:gap-[35px] text-[12px] lg:text-[15px] tracking-normal bg-[#D9D9D9] py-[7px] px-[17px] my-[21px] lg:my-[0] w-fit`}
              >
                {button?.text}
                {button?.img && (
                  <img className="lg:w-[30px]" src={button.img} alt="" />
                )}
              </button>
              <NextItems onClick={setClick} limit={limit} click={click} id={id} />
            </div>
          )}
        </div>
        {childrenbefore && children}
        {callToAction && !desktop && (
          <div className="block w-fit justify-self-end mb-[10px]">
            {link?.isLink ? (
              <Link to={link.link}>
                <CallToAction {...callToAction} />
              </Link>
            ) : (
              <CallToAction {...callToAction} />
            )}
          </div>
        )}
        <Gallery details={cardDetails} inline={inline} click={click} onLimit={setLimit} id={id}/>
        {!childrenbefore && children}
        {!button && desktop && <NextItems align={align} onClick={setClick} click={click} limit={limit} id={id}/>}

        {button && !desktop && (
          <button
            className={`${button.letterCase} flex gap-[17px] text-[12px] tracking-normal bg-[#D9D9D9] py-[7px] px-[17px] my-[21px]`}
          >
            {button?.text}
            {button?.img && <img src={button.img} alt="" />}
          </button>
        )}
      </div>
    </>
  );
};

export default Collection;
