import icon from "../public/imagens/icone.svg";

const Footer = () => {
  return (
    <>
      <div className="pt-[25px] lg:grid lg:grid-cols-7">
        <div className="grid grid-cols-2 mb-[30px] lg:flex lg:flex-col lg:col-start-2 lg:justify-between">
          <div>
            <h5 className="uppercase text-[#00000044] text-[7px] mb-[15px] lg:text-[11px]">
              info
            </h5>
            <ul>
              <li className="uppercase text-[9px] text-[#00000077] lg:text-[14px]">
                pricing /
              </li>
              <li className="uppercase text-[9px] text-[#00000077] lg:text-[14px]">about /</li>
              <li className="uppercase text-[9px] text-[#00000077] lg:text-[14px]">
                contacts
              </li>
            </ul>
          </div>
          <div>
            <h5 className="uppercase text-[#00000044] text-[7px] mb-[15px] lg:text-[11px]">
              languages
            </h5>
            <ul>
              <li className="uppercase text-[9px] text-[#00000077] lg:text-[14px]">eng /</li>
              <li className="uppercase text-[9px] text-[#00000077] lg:text-[14px]">esp /</li>
              <li className="uppercase text-[9px] text-[#00000077] lg:text-[14px]">sve</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:col-start-4">
          <h5 className="uppercase text-[#00000044] text-[7px] mb-[20px] lg:text-[11px]">
            technologies
          </h5>
          <div className="text-[50px] font-extrabold pb-[20px] leading-[40px] lg:text-[100px] lg:leading-[80px]">
            <div className="relative">
              <span className="text-[#00000011]">VR</span>
              <img
                className="absolute top-[0] left-[0] h-[80%]"
                src={icon}
                alt=""
              />
            </div>
            <div className="flex m-auto">
              <span className="text-[#000000e3]">XIV</span>
              <span className="mx-[10px] text-[7px] font-normal text-[#00000044] leading-[10px] min-w-max lg:text-[10px]">
                Near-field communication
              </span>
              <span className="font-thin text-[#00000044]">/</span>
            </div>
            <div className="text-[#000000e3]">QR</div>
          </div>
        </div>
      </div>
      <div className="text-[#00000044] pt-[10px] text-[5px] tracking-normal text-center lg:text-[10px]">
        © 2024 — copyright
      </div>
    </>
  );
};
export default Footer;
