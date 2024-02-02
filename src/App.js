import './App.css';
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NoPage from "./pages/NoPage";
import ZoosPage from "./pages/ZoosPage";
import AnimalPage from "./pages/AnimalPage";
import ReptilePage from './pages/ReptilePage';
import AmphibianPage from './pages/AmphibianPage';
import BirdsPage from './pages/BirdPage';
import FishPage from './pages/FishPage';
import MammalsPage from './pages/MammalPage';
import InsectsPage from './pages/InsectPage';


export default function App() {

  return (
 
  <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="contact" element={<ContactPage />} />
        <Route path="zoos" element={<ZoosPage />}/>
        <Route path="animals" element={<AnimalPage />}/>
        <Route path="animals/reptiles" element={<ReptilePage />}/>
        <Route path="animals/amphibians" element={<AmphibianPage/>}/>
        <Route path="animals/fishes" element={<FishPage/>}/>
        <Route path="animals/mammals" element={<MammalsPage/>}/>
        <Route path="animals/insects" element={<InsectsPage/>}/>
        <Route path="animals/birds" element={<BirdsPage/>}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
  </div>
  );
}
