import Amphibians from "../components/Amphibians";
import SidebarComponent from "../components/Sidebar";
import "./Page.css"

const AmphibianPage = () => {
  return(
    <div className="page">
      <Amphibians/>
      <SidebarComponent/>      
    </div>
  );
}

export default AmphibianPage;