import { Routes, Route, useNavigate } from "react-router-dom";
import Admin from "./pages/admin";
import "./App.css";
import Employee from "./pages/employee";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="nav"></div>

      <div className="container flex">
        <div
          className="card flex"
          onClick={() => navigate("/admin")}
        >
          <h2 style={{ color: "rgb(8, 44, 253)" }}>Admin</h2>
        </div>

        <div className="card flex" onClick={() => navigate("/employee")}>
          <h2 style={{ color: "rgb(30, 255, 0)" }}>Employee</h2>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/employee" element={<Employee />} />
    </Routes>
  );
}

export default App;