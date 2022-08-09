const CartItems = (props) => {
    return (
        <div className="mx-4 border-2 my-2 p-2 flex justify-between">
            <div className="w-[50px] h-[50px] bg-blue-300">hi</div>
            <div>
                <h2 className="font-semibold text-sm">{props.name}</h2>
                <p>{props.price}</p>
            </div>
            <div className="flex items-center justify-center border-2 rounded-full border-black">
                <button className="px-4 py-0  rounded-full mr-4" onClick={props.onRemoveItem}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                        </svg>
                    </span>
                </button>
                <div>{props.amount}</div>
                <button className="px-4 py-1  rounded-full ml-4" onClick={props.onAddItem}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default CartItems;