import React from "react";
import ExpenseItem from "./ExpenseItem";
import './Expense.css'
import ExpenseForm from "../NewExpenses/ExpenseForm";
import Card from "../UI/Card";

function Expense(props){

    return(
        <Card className="expense">
            <ExpenseForm></ExpenseForm>
            <ExpenseItem
                title={props.expensesValue[0].title}
                amount={props.expensesValue[0].amount}
                date={props.expensesValue[0].date}
            />
            <ExpenseItem
                title={props.expensesValue[1].title}
                amount={props.expensesValue[1].amount}
                date={props.expensesValue[1].date}
            />
            <ExpenseItem
                title={props.expensesValue[2].title}
                amount={props.expensesValue[2].amount}
                date={props.expensesValue[2].date}
            />
            <ExpenseItem
                title={props.expensesValue[3].title}
                amount={props.expensesValue[3].amount}
                date={props.expensesValue[3].date}
            />

        </Card>
    );


}

export default Expense;