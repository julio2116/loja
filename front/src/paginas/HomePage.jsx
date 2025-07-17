import Collection from "../components/Colection";
import Options from "../components/Options";
import SearchBox from "../components/SearchBox";
import seta from "../public/imagens/seta.svg";

const HomePage = () => {
    return (
        <>
            <Options />
            <SearchBox />
            <Collection
                title={{ text: "new collection", letterCase: 'uppercase' }}
                subtitle={{ text: "summer 2025", width: "82px", letterCase: 'camelcase' }}
                callToAction={{ text: "arrasta pro lado", img: seta }}
            />
            <Collection
                title={{ text: "new this week", letterCase: 'uppercase' }}
                callToAction={{ text: "see all",  letterCase: 'camelcase' }}
            />
        </>
    );
};
export default HomePage;
