import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2>Expense Tracker</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
        <Link to="/list">List</Link>
        <button onClick={toggleTheme}>Toggle</button>
      </div>
    </nav>
  );
}

export default Navbar;