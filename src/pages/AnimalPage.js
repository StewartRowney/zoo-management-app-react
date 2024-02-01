import Animals from "../components/Animals";
import SidebarComponent from '../components/Sidebar';
import "./Page.css";

const AnimalPage = () => {
  
  return (
    <div className="page">
      <Animals/>
      <SidebarComponent/>
    </div>
  );
};

export default AnimalPage;
