import Mammals from "../components/Mammals";
import SidebarComponent from "../components/Sidebar";
import "./Page.css";

const MammalsPage = () => { 
  return (
    <div className="page">
      <Mammals /> 
      <SidebarComponent />
    </div>
  );
}

export default MammalsPage;
