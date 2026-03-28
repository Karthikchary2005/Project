import { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";

function ExpenseList() {
  const { expenses, removeExpense, totalAmount } =
    useContext(ExpenseContext);

  return (
    <div className="page-wrapper">
      <div className="form-card list-container">
        <h2>Expense List</h2>

        {expenses.length === 0 && <p>No expenses yet</p>}

        {expenses.map((exp) => (
          <div key={exp.id} className="card">
            <span>{exp.title}</span>
            <span>₹ {exp.amount}</span>
            <button
              onClick={() => removeExpense(exp.id)}
              className="delete-btn"
            >
              Remove
            </button>
          </div>
        ))}

        {expenses.length > 0 && (
          <div className="list-total">
            <h3>Total</h3>
            <h2>₹ {totalAmount}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExpenseList;