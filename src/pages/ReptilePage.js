import Reptiles from "../components/Reptiles";
import SidebarComponent from "../components/Sidebar";
import "./Page.css"


const ReptilePage = () =>{

    return(
      <div className="page">
        <Reptiles/>
          <SidebarComponent/>
        </div>
        
      );
    };
    
export default ReptilePage;