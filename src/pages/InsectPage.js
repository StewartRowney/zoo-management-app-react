import Insects from "../components/Insects"; 
import SidebarComponent from "../components/Sidebar";
import "./Page.css";

const InsectsPage = () => { 
  return (
    <div className="page">
      <Insects /> 
      <SidebarComponent />
    </div>
  );
}

export default InsectsPage; 
