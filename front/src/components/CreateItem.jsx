const CreateItem = () => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        
        try {
            await fetch('http://localhost:3000/', {
                method: 'POST',
                body: formData
            })
        }catch(error){
            console.log(error.message)
        }
    }

    return(
        <>
            <form onSubmit={(e)=>handleSubmit(e)} style={{width: "150px", margin: "auto", display: "flex", flexDirection: "column", gap: "10px"}}>
                <label htmlFor="imagem" style={{backgroundColor: "gray", color: "white", padding: "5px 15px", borderRadius: "10px", width: "100%", display: "block"}}>Imagem</label>
                <input type="file" name="imagem" id="imagem" hidden/>
                <label htmlFor="produto">Produto</label>
                <input style={{width: "100%"}} type="text" name="produto" id="produto" />
                <label htmlFor="valor">Valor</label>
                <input style={{width: "100%"}} type="text" name="valor" id="valor" />
                <button>Enviar</button>
            </form>
        </>
    )
}

export default CreateItem