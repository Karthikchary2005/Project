import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) return;
    navigate("/");
  };

  return (
    <div className="page-wrapper">
      <div className="form-card">
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Full Name" onChange={handleChange}/>

          <input name="email" placeholder="Email" onChange={handleChange}/>

          <input name="password" type="password" placeholder="Password" onChange={handleChange}/>

          <button type="submit">Create Account</button>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;