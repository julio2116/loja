const Item = ({ produto, valor, imagem }) => {
    return (
        <>
            <div style={{width: 'fit-content'}}>
                <img src={`http://localhost:3000${imagem}`} alt="" />
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <span>{produto}</span>
                    <span>{valor}</span>
                </div>
            </div>
        </>
    );
};

export default Item;
