import Fishes from "../components/Fish"; 
import SidebarComponent from "../components/Sidebar";
import "./Page.css";

const FishesPage = () => { 
  return (
    <div className="page">
      <Fishes /> 
      <SidebarComponent />
    </div>
  );
}

export default FishesPage; 