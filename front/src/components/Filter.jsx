const Filter = () => {
    return (
        <>
            <div className="flex gap-[80px] text-[12px] lg:text-[18px] leading-[15px] text-[#00000066] w-full lg:justify-between">
                <ul className="flex flex-col gap-[5px] self-end lg:flex-row lg:gap-[45px]">
                    <li className="text-[#000000]">(all)</li>
                    <li>Men</li>
                    <li>Womem</li>
                    <li>KID</li>
                </ul>
                <div className="flex lg:w-fit lg:gap-[120px] justify-between w-full">
                    <div className="text-[#000000]">Filters(+)</div>
                    <div className="flex flex-col lg:min-w-fit">
                        <div className="text-[#000000]">Sorts(-)</div>
                        <span className="my-[5px]">Less to more</span>
                        <span className="my-[5px]">More to less</span>
                    </div>
                </div>
            </div>
            <hr className="mb-[15px] mt-[7px] border-[#00000010] lg:mb-[30px] lg:mt-[14px]" />
        </>
    );
};
export default Filter;
