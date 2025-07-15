import { useEffect, useState } from "react"
import Item from "./Item";

const AllProducts = () => {
    const [produtos, setProdutos] = useState({})
    useEffect(()=>{
        async function fetchData (){
            const data = await fetch('http://localhost:3000/api/produtos');
            const produtosJson = await data.json();
            setProdutos(produtosJson)}
        fetchData();
    }, [])
    return(
        <>
            {produtos['result']?.map((item, index) => (<Item key={index} {...item}/>))}
        </>
    )
}
export default AllProducts