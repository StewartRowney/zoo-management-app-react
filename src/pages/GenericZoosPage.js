import SidebarComponent from '../components/Sidebar';
import GenericZoos from '../components/GenericZoos';
import "./Page.css"

const GenericZoosPage= () =>{

    return(
        <div className="page">
          <GenericZoos/>
            <SidebarComponent/>
          </div>
          
        );
}

export default GenericZoosPage;