import icon from "../public/imagens/icone.svg";

const Footer = () => {
    return (
        <>
            <div className="pt-[25px]">
                <div className="grid grid-cols-2 mb-[30px]">
                    <div>
                        <h5 className="uppercase text-[#00000044] text-[7px] mb-[15px]">
                            info
                        </h5>
                        <ul>
                            <li className="uppercase text-[9px] text-[#00000077]">
                                pricing /
                            </li>
                            <li className="uppercase text-[9px] text-[#00000077]">
                                about /
                            </li>
                            <li className="uppercase text-[9px] text-[#00000077]">
                                contacts
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="uppercase text-[#00000044] text-[7px] mb-[15px]">
                            languages
                        </h5>
                        <ul>
                            <li className="uppercase text-[9px] text-[#00000077]">
                                eng /
                            </li>
                            <li className="uppercase text-[9px] text-[#00000077]">
                                esp /
                            </li>
                            <li className="uppercase text-[9px] text-[#00000077]">
                                sve
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full">
                    <h5 className="uppercase text-[#00000044] text-[7px] mb-[20px]">
                        technologies
                    </h5>
                    <div className="text-[50px] font-extrabold leading-[25px] pb-[20px]">
                        <div className="relative mb-[13px]">
                            <span className="text-[#00000011]">VR</span>
                            <img
                                className="absolute top-[-5.5px] left-[0]"
                                width="30px"
                                src={icon}
                                alt=""
                            />
                        </div>
                        <div>
                            <span className="text-[#000000e3]">XIV</span>
                            <span className="mx-[10px] text-[7px] font-normal text-[#00000044]">
                                Near-field communication
                            </span>
                            <span className="font-thin text-[#00000044]">
                                /
                            </span>
                        </div>
                        <span className="leading-[5px] text-[#000000e3]">QR</span>
                    </div>
                </div>
                <div className="text-[#00000044] pt-[10px] text-[5px] tracking-normal text-center">© 2024 — copyright</div>
            </div>
        </>
    );
};
export default Footer;
