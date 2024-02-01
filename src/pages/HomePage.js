import Home from '../components/Home';
import SidebarComponent from '../components/Sidebar';
import "./Page.css";
 
 const HomePage = () => {
        return (
          <div className='page'>
            <Home></Home>
            <SidebarComponent/>
          </div>
        )
      };
      
      export default HomePage;
