import { Fragment, useContext } from "react";
import CartContext from "../../store/cart-context";

const NavCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const hasItems = cartCtx.items.length > 0;

    const numberOfCartItems = cartCtx.items.reduce((curNum, item)=>{
        return curNum + item.amount;
    }, 0)

    return (
        <Fragment>
            <div className="w-10 h-10 absolute right-4  ">
                <button onClick={props.onShow}>
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </button></div>
            <div onClick={props.onShow} className={`${hasItems ? 'blcok' : 'opacity-0'} px-[6px] py-[2px] cursor-pointer bg-red-600 rounded-full font-bold text-[10px] text-white relative -top-[10px] right-[8px] `}>{numberOfCartItems}</div>
        </Fragment>
    )
}

export default NavCartButton;