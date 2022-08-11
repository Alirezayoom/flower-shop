import { useContext } from "react";
import CartItems from "./CartItems";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = props => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    const hasItems = cartCtx.items.length > 0;

    const onAddItemHandler = (item) => {
        cartCtx.addItem({...item, amount: 1})
    }

    const onRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const cartItems = cartCtx.items.map((item) => (
        <CartItems  
            key={item.id}
            name={item.name} 
            amount={item.amount} 
            price={item.price}
            aks={item.aks}
            onRemoveItem={onRemoveHandler.bind(null, item.id)}
            onAddItem={onAddItemHandler.bind(null, item)} 
            
            />
    ))

    return (
        <Modal onHide={props.onHide}><div>
            <div className="font-semibold text-xl m-4 border-b-2"><p className="mb-4">Your Cart</p></div>
            <div className="max-h-[18rem] overflow-auto">
            {cartItems}
            </div>
            
            {!hasItems && <div className="text-center">
                <p>oops!</p>
                <p>Your cart is empty</p>
            </div>}
            
            <div className="flex justify-between m-4 items-center border-t-2 ">
                <div className=" justify-start mt-4">
                    <span className="font-semibold mr-2">Total: </span>
                    <span className="">{totalAmount}</span>
                </div>
                <div className="flex mt-4">
                    <button className="py-1 px-4 border border-black rounded-full hover:bg-black hover:text-white mr-2" onClick={props.onHide}>Close</button>
                    {hasItems && <button className="py-1 px-4 border border-black rounded-full hover:bg-black hover:text-white">Order</button>}
                </div>
            </div>
            </div>
        </Modal>
    )
}

export default Cart;