import { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Calendar from "./views/Calendar/calendar.tsx";
import Home from "./views/Home/home.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <h1>Momentum FE</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calendar">Calendar</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
