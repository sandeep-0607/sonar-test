import React from "react";
import Item from "./item"

const Explist = ({expense,handleEdit,handleDelete}) => {

    return(
        <ul>
            {expense.map(exp =>{
                return <Item key = {exp.id} 
                expense={exp} 
                handleEdit = {handleEdit} 
                handleDelete = {handleDelete} 
                />})}
        </ul>
        
    )}
export default Explist;