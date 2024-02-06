import Birds from "../components/Birds";
import SidebarComponent from "../components/Sidebar";
import "./Page.css"

const BirdsPage = () => {
  return(
    <div className="page">
      <Birds/>
      <SidebarComponent/>      
    </div>
  );
}

export default BirdsPage;
