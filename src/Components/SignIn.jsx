import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";

function SignIn() {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(ExpenseContext);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) return;

    localStorage.setItem("currentUser", form.email);
    setCurrentUser(form.email);

    navigate("/add");
  };

  return (
    <div className="page-wrapper">
      <div className="form-card">
        <h2>Sign In</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>

        <p>
          New user? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;