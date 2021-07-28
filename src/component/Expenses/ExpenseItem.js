import './ExpenseItem.css';
import './ExpenseItemDate.js'
import React, {useState} from "react";
import ExpenseItemDate from './ExpenseItemDate';

function ExpenseItem(props) {
    const [title,setTitle] = useState(props.title);

    const clickHandler = ()=>{
        setTitle('Updated');
    };
    return (
        <div className='expense-item'>
            <ExpenseItemDate date = {props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={clickHandler}>Change Value</button>
            </div>
        </div>
    );
}

export default ExpenseItem;
