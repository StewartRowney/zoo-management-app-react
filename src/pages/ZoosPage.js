import AddZooForm from '../components/AddZooForm';
import SidebarComponent from '../components/Sidebar';
import Zoos from '../components/Zoos';

export default function ZoosPage(){

return(
<div className="page">
    <Zoos></Zoos>
    <AddZooForm></AddZooForm>
    <SidebarComponent></SidebarComponent>
</div>
);
}