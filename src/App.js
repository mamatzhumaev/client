import "./App.css";
import { Header } from "./components/Header/Header.js";
import { Login } from "./pages/Login/Login.js";
import { Register } from "./pages/Register/Register.js";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
          <Header />
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </div>
  );
};

export default App;
