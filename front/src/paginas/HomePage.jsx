import Collection from "../components/Collection";
import Options from "../components/Options";
import SearchBox from "../components/SearchBox";
import seta from "../public/imagens/seta.svg";
import setaDireita from "../public/imagens/seta-direita.svg";

const HomePage = () => {
    return (
        <>
            <Options />
            <SearchBox />
            <Collection
                title={{ text: "new collection", letterCase: 'uppercase' }}
                subtitle={{ text: "summer 2025", width: "82px", letterCase: 'camelcase' }}
                callToAction={{ text: "arrasta pro lado", img: seta }}
                button={{text: "go to shop", img: setaDireita, letterCase: 'camelcase'}}
            />
            <Collection
                title={{ text: "new this week", letterCase: 'uppercase' }}
                callToAction={{ text: "see all",  letterCase: 'camelcase' }}
            />
        </>
    );
};
export default HomePage;
