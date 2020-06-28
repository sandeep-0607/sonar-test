import React,{useState} from "react";
import Expform from "./component/expform";
import Explist from "./component/explist";

const App = () => {
    const [expense , setExpense] = useState([]);
    const [charge  ,setCharge] = useState("");
    const [amount  ,setAmount] = useState("");
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(0);

const handleCharge = (e) =>{
    setCharge(e.target.value); 
}
const handleAmount = (e) =>{
    setAmount(e.target.value);
}
const handleSubmit = (e) =>{
    e.preventDefault();
    if(charge !== "" && amount >0){
        if(edit){let tempExp = expense.map(item => {
            return item.id ===id ?{...item , charge , amount}:item;
        })
        setExpense(tempExp)

        }else{
            setExpense([...expense,{id:Date.now(), charge,amount}])
        }
    
    setCharge("");
    setAmount("");
    }else{
        alert("input charge and Amount");
    }
}
const handleClear = (e)=>{
    e.preventDefault();
    setExpense([]);
}
const handleEdit = (id) =>{
    setEdit(true);
    setId(id);
    const tempExpnc = expense.find(item =>{
        return (item.id === id);
    })
    setCharge(tempExpnc.charge);
    setAmount(tempExpnc.amount);

}
const handleDelete = (id) =>{
const tempExp = expense.filter(item =>{
    return (item.id !== id);
})
setExpense(tempExp);
}


    return (
        <>     
            <h1>Budget calculator</h1>
            <Expform
            edit = {edit}
            charge = {charge}
            amount ={amount}
            handleCharge = {handleCharge}
            handleAmount = {handleAmount}
            handleSubmit = {handleSubmit}/>

            <Explist 
            expense = {expense}
            handleEdit= {handleEdit}
            handleDelete={handleDelete}
             />

            <button onClick = {handleClear}>clear all items</button>
            <h1>total budget is  = Rs - {expense.reduce((a,b)=>{
                return(
                    a += parseInt(b.amount)
                );
            },0)}
            </h1>
        </> 
    )
}
export default App;