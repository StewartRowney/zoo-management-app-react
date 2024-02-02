// import AddZooForm from '../components/AddZooForm';
import SidebarComponent from '../components/Sidebar';
import ZooFormComponentSimple from '../components/ZooFormComponentSimple';
import Zoos from '../components/Zoos';

export default function ZoosPage(){

return(
<div className="page">
    <Zoos></Zoos>
    <ZooFormComponentSimple/>
    <SidebarComponent></SidebarComponent>
</div>
);
}