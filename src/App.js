import "antd/dist/antd.css";
import { Home } from "./components/pages/website/Home";
import { MyMovies } from "./components/pages/website/MyMovies";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Register } from "./components/pages/auth/Register";
import { Login } from "./components/pages/auth/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/my-movies" element={<MyMovies />} />
    </Routes>
  );
}

export default App;
