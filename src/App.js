import Signin from "./pages/Signin";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
