import Collection from "../components/Collection";
import Options from "../components/Options";
import SearchBox from "../components/SearchBox";
import seta from "../public/imagens/seta.svg";
import setaDireita from "../public/imagens/seta-direita.svg";
import Filter from "../components/Filter";
import VisualIdentityBlock from "../components/VisualIdentityBlock";

const HomePage = () => {
  return (
    <>
      <div className="lg:w-[30%]">
        <Options />
        <SearchBox />
      </div>
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
        inline={true}
        id={1}
      />
      <Collection
        title={{ text: "new this week", letterCase: "uppercase" }}
        callToAction={{ text: "see all", letterCase: "capitalize" }}
        link={{ isLink: true, link: "#" }}
        countItems={true}
        splitTitle={"firstword"}
        cardDetails={true}
        align={true}
        id={2}
      />
      <Collection
        childrenbefore={true}
        title={{
          text: "xiv collections 23-24",
          letterCase: "uppercase",
        }}
        splitTitle={"allwords"}
        align={true}
        id={3}
      >
        <Filter />
      </Collection>
      <VisualIdentityBlock />
    </>
  );
};
export default HomePage;
