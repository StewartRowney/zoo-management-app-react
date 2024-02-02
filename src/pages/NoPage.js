import NoPageComponent from "../components/NoPageComponent";
import SidebarComponent from "../components/Sidebar";
import "./Page.css"

const NoPage = () => {
  return (
    <div className='page'>
      <NoPageComponent/>
      <SidebarComponent/>
    </div>
  )
  };
  
  export default NoPage;