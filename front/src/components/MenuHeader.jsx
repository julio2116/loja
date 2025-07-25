import { Link } from "react-router";

const MenuHeader = ({items}) => {
    return(
        <>
            <ul className="flex gap-[35px]">
                {items.map((item, i)=>(
                    <Link><li key={i}>{item}</li></Link>
                ))}
            </ul>
        </>
    )
}
export default MenuHeader