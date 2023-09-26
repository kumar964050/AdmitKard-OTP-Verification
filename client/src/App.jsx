import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Verification from "./Pages/Verification";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/login" element={<Login />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
