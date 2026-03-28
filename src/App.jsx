import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./Components/ThemeContext";
import { ExpenseProvider } from "./Components/ExpenseContext";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SignIn from "./Components/Signin";
import SignUp from "./Components/SignUp";
import AddExpense from "./Components/AddExpense";
import ExpenseList from "./Components/ExpenseList";

function App() {
  return (
    <ThemeProvider>
      <ExpenseProvider>
        <BrowserRouter>
          <div className="app-container">
            <Navbar />

            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/add" element={<AddExpense />} />
              <Route path="/list" element={<ExpenseList />} />
            </Routes>

            <Footer />
          </div>
        </BrowserRouter>
      </ExpenseProvider>
    </ThemeProvider>
  );
}

export default App;