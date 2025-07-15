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
            <form onSubmit={(e)=>handleSubmit(e)} className="w-[150px] m-auto flex flex-col gap-[10px]">
                <label htmlFor="imagem" className="bg-[gray] text-[white] p-[5px 15px] rounded-[10px] w-[100%] block">Imagem</label>
                <input type="file" name="imagem" id="imagem" hidden/>
                <label htmlFor="produto">Produto</label>
                <input className="w-[100%]" type="text" name="produto" id="produto" />
                <label htmlFor="valor">Valor</label>
                <input className="w-[100%]" type="text" name="valor" id="valor" />
                <button>Enviar</button>
            </form>
        </>
    )
}

export default CreateItem