const CallToAction = ({text, letterCase, img}) => {
    return (
        <>
            <span className="flex items-center gap-[5px]">
                {img && (
                    <img
                        className="rotate-[225deg]"
                        src={img}
                        width="20px"
                        alt=""
                    />
                )}
                <span
                    className={`${letterCase} text-[8px] text-[#00000066] font-semibold`}
                >
                    {text}
                </span>
            </span>
        </>
    );
};
export default CallToAction;
