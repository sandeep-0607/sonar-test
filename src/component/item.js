import React from "react";

const Item = ({expense, handleEdit, handleDelete})=>{
    const {id, charge, amount} = expense;

    return (
        <>
        <li>
        <span>{charge} is </span>
        <span>rs - {amount}</span>
        <button onClick = {() =>handleEdit(id)}>edit</button>
        <button onClick ={() =>handleDelete(id)}>dlt</button>
        </li>
        </>
    )
}
export default Item;