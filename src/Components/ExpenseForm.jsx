import { useState } from "react";

function ExpenseForm({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.amount) return;

    onAdd({
      ...form,
      id: Date.now()
    });

    setForm({
      title: "",
      amount: "",
      category: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
      />

      <input
        name="amount"
        type="number"
        value={form.amount}
        onChange={handleChange}
        placeholder="Amount"
      />

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Shopping</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;