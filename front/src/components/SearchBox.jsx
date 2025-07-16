import lupa from "../public/imagens/lupa.svg";

const SearchBox = () => {
    return (
        <>
            <form className="flex w-full px-[15px] py-[8px] bg-[#D9D9D9] rounded-[4px] mt-[16px]">
                <img src={lupa} alt="" width="11.75px"/>
                <input className="w-full mx-[5px] focus:outline-none" type="text" name="search" id="search" />
                <button className="text-[#00000066] text-[12px] self-center tracking-[2px]"
                    style={{ fontFamily: "'Beatrice Deck Trial', sans-serif" }}
                >
                    Search
                </button>
            </form>
        </>
    );
};

export default SearchBox;
