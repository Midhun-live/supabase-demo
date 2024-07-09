import "./App.css";
import Create from "./pages/Create";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Update from "./pages/Update";

function App() {
  return (
    <Router>
      <nav className="heading">
        <h1>Student Data</h1>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Student</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
