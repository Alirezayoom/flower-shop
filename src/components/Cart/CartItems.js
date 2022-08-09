const CartItems = (props) => {
    return (
        <div className="mx-4 border-2 my-2 p-2 flex justify-between">
            <div>{props.aks}</div>
            <div>
                <h2 className="font-semibold text-sm">{props.name}</h2>
                <p>{props.price}</p>
            </div>
            <div className="flex items-center justify-center border-2 rounded-full border-black">
                <button className="px-4 py-1  rounded-full mr-4">-</button>
                <div>{props.amount}</div>
                <button className="px-4 py-1  rounded-full ml-4">+</button>
            </div>
        </div>
    )
}

export default CartItems;