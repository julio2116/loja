import CallToAction from "./CallToAction";
import Gallery from "./Gallery";
import { Link } from "react-router";
import { formatText } from "../utils/formatText";
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
}) => {
    const newTitle = formatText(title.text, splitTitle);

    return (
        <>
            <div className="relative w-fit">
                <h1
                    className={`${
                        title?.letterCase || ""
                    } font-semibold text-[45px] leading-[40px] mb-[10px] mt-[45px]`}
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
                {childrenbefore &&  children }
            </div>
            {callToAction && (
                <div className="block w-fit justify-self-end">
                    {link?.isLink ? (
                        <Link to={link.link}>
                            <CallToAction {...callToAction} />
                        </Link>
                    ) : (
                        <CallToAction {...callToAction} />
                    )}
                </div>
            )}
            <Gallery />
            {!childrenbefore &&  children }
            {button && (
                <button
                    className={`${button.letterCase} flex gap-[17px] text-[12px] tracking-normal bg-[#D9D9D9] py-[7px] px-[17px] my-[21px]`}
                >
                    {button?.text}
                    {button?.img && <img src={button.img} alt="" />}
                </button>
            )}
        </>
    );
};

export default Collection;
