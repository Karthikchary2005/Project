import { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";
import ExpenseForm from "./ExpenseForm";

function AddExpense() {
  const { addExpense } = useContext(ExpenseContext);

  return (
    <div className="page-wrapper">
      <div className="form-card">
        <h2>Add Expense</h2>
        <ExpenseForm onAdd={addExpense} />
      </div>
    </div>
  );
}

export default AddExpense;