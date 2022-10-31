import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div>
        Expenses
        <ExpenseItem title={props.expenses[0].title} />
        <ExpenseItem title={props.expenses[1].title} />
    </div>
  )
}

export default Expenses