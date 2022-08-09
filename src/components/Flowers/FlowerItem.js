import { useContext } from "react";
import FlowerForm from "./FlowerForm";
import CartContext from "../../store/cart-context";

const FlowerItem = (props) => {
    const cartCtx = useContext(CartContext)

    const amountNumHandler = amount => {
        cartCtx.addItem({
         id: props.id,
         aks: props.aks,
         name: props.name,
         amount: amount,
         price: props.price   
        })
    }

    return (
        <div className=" min-w-[230px] max-h-[350px] border-zinc-900 text-center  mx-4 mb-6 ">


            <div className={`w-auto h-[260px] ${ props.bgc} flex justify-center items-center`}>
                <img src={props.aks} alt="gol" className='w-[150px] ' />
            </div>
            <div className="py-2  ">
                <h6 className="text-sm text-gray-800 font-bold">{props.name}</h6>
                <p className="font-bold text-blue-900">${props.price}</p>
                <div className="border-2 border-black w-[140px] mx-auto m-2">
                    <FlowerForm onAddToCart={amountNumHandler} />
                </div>
            </div>


        </div>
    )
}

export default FlowerItem;