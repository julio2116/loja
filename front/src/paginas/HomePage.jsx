import Collection from "../components/Collection";
import Options from "../components/Options";
import SearchBox from "../components/SearchBox";
import seta from "../public/imagens/seta.svg";
import setaDireita from "../public/imagens/seta-direita.svg";
import Filter from "../components/Filter";

const HomePage = () => {
    return (
        <>
            <Options />
            <SearchBox />
            <Collection
                title={{ text: "new collection", letterCase: "uppercase" }}
                subtitle={{
                    text: "summer 2025",
                    width: "82px",
                    letterCase: "capitalize",
                }}
                callToAction={{ text: "arrasta pro lado", img: seta }}
                button={{
                    text: "go to shop",
                    img: setaDireita,
                    letterCase: "capitalize",
                }}
                splitTitle={"firstword"}
            />
            <Collection
                title={{ text: "new this week", letterCase: "uppercase" }}
                callToAction={{ text: "see all", letterCase: "capitalize" }}
                link={{ isLink: true, link: "#" }}
                countItems={true}
                splitTitle={"firstword"}
            />
            <Collection
                childrenbefore={true}
                title={{
                    text: "xiv collections 23-24",
                    letterCase: "uppercase",
                }}
                splitTitle={"allwords"}
            >
                <Filter />
            </Collection>
        </>
    );
};
export default HomePage;
