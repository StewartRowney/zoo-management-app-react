import './App.css';
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NoPage from "./pages/NoPage";
import ZoosPage from "./pages/ZoosPage";
import AnimalPage from "./pages/AnimalPage";
import AmphibianPage from './pages/AmphibianPage';


export default function App() {

  return (
 
  <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="contact" element={<ContactPage />} />
        <Route path="zoos" element={<ZoosPage />}/>
        <Route path="animals" element={<AnimalPage />}/>
        <Route path="*" element={<NoPage />} />
        <Route path="animals/amphibians" element={<AmphibianPage/>}/>
      </Routes>
  </div>
  );
}
