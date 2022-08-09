import { useRef } from "react";

const FlowerForm = props => {
    const submitHandler = (e) => {
        e.preventDefault();

        const enteredAmount = amountItemRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        
        if(enteredAmount.trim().length === 0 || enteredAmountNumber>5 || enteredAmountNumber <0){
            return
        }

        props.onAddToCart(enteredAmountNumber);
    }

    const amountItemRef = useRef();

    return (
        <form className="grid grid-cols-2 items-center justify-center" onSubmit={submitHandler}>
            <div>
                <label htmlFor="amount" className="text-gray-800">&times; </label>
                <input className="w-8 "
                    ref={amountItemRef}
                    id="amount"
                    type="number"
                    name="amount"
                    min="1"
                    max="5"
                    step="1"
                    defaultValue="1"
                />
            </div>
            <button className="px-2 py-1 bg-black text-sm  text-white">BUY</button>
        </form>
    )
}

export default FlowerForm;