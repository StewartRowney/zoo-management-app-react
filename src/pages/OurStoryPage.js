import SidebarComponent from "../components/Sidebar";
import OurStory from "../components/OurStory"; 
import "./Page.css"

const OurStoryPage = () => {
  return(
    <div className="page">
      <OurStory/>
      <SidebarComponent/>      
    </div>
  );
}

export default OurStoryPage;