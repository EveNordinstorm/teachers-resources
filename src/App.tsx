import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResourcePage from "./pages/ResourcePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resource/:id" element={<ResourcePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
