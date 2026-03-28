function ExpenseItem({ expense }) {
  return (
    <div className="card">
      <h4>{expense.title}</h4>
      <p>{expense.category}</p>
      <p>₹ {expense.amount}</p>
    </div>
  );
}

export default ExpenseItem;