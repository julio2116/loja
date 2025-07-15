const Item = ({ produto, valor, imagem }) => {
    return (
        <>
            <div className="w-fit">
                <img className="w-full" src={`http://localhost:3000${imagem}`} alt="" />
                <div className="flex justify-between">
                    <span>{produto}</span>
                    <span>{valor}</span>
                </div>
            </div>
        </>
    );
};

export default Item;
