import React, { useRef, useEffect } from "react";

const Expform = (props) => {
    const { edit, amount, charge, handleCharge, handleAmount } = props;

    const chargeInput = useRef(null);

    useEffect(() => {
        chargeInput.current.focus();
    }, []);

    const handleSubmit = (event) => {
       // chargeInput.current.focus();
        props.handleAmount(event);
    }

    return(
        <>
        <div className = "formContainer">
            <div>
                <div className = 'testDiv'>san</div>
                <div className = 'testDiv'>raj</div>
                <div className = 'testDiv'>it</div>
                <div className = 'testDiv'>solution</div>
            </div>
            <div>
                <span amount={2}/>
                <span amount={4}/>
                <span amount={8}/>
            </div>
            <input className = "testInput"/>
        <form>
        <div>
            <label className = 'label1' htmlFor = "charge">Charge</label>
            
            <input
                className = 'inputDescription'
                ref={chargeInput}
                type = "text"
                placeholder = "eg - Car rent"
                name = "charge"
                value = {charge}
                onChange = {handleCharge}
            />
        
            <label className = 'label2' htmlFor = "amount">Amount</label>
            <input className = 'inputAmount' type = "number" placeholder = "eg - 100" name = "amount" value = {amount} onChange = {handleAmount}/>
        </div><br></br>
        <button
            className = "label2"
            type = "submit"
            onClick = {handleSubmit}
        >Button{(edit)?"edit":"Submit"}</button>
        
        </form>
        </div>
        </>
     )
 }
export default Expform;

