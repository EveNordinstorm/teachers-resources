import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ResourcePage from "./pages/Resource/ResourcePage";
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resource/:id" element={<ResourcePage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
