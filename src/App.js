import './App.css';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NoPage from "./pages/NoPage";
import ZoosPage from "./pages/ZoosPage";
import SidebarComponent from "./components/Sidebar";
import Animal from "./pages/AnimalPage";


export default function App() {

  return (
 
  <div>
    {/* <SidebarComponent></SidebarComponent> */}
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="contact" element={<ContactPage />} />
        <Route path="zoos" element={<ZoosPage />}/>
        <Route path="animals" element={<Animal />}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
  </div>
  );
}
