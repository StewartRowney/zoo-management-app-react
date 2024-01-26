import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/LayoutPage";
import Home from "./pages/HomePage";
import Contact from "./pages/ContactPage";
import NoPage from "./pages/NoPage";
import Zoos from "./pages/ZoosPage";
import Animal from "./pages/AnimalPage";

export default function App() {

  return (
  
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="zoos" element={<Zoos />}/>
      <Route path="*" element={<NoPage />} />
      <Route path="animals" element={<Animal />} />
  </Routes>
</BrowserRouter>

  );
}
