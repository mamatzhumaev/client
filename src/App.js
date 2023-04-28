import "./App.css";
import { Header } from "./components/Header/Header.js";
import { Register,Login } from "./pages";
import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container"


const App = () => {
  return (
    <div className="app">
          <Header />
      <Container maxWidth='lg'>
      <Routes>
        <Route path="/auth/sign-in" element={<Login />}/>
        <Route path="/auth/register" element={<Register />}/>
      </Routes>
      </Container>
    </div>
  );
};

export default App;
