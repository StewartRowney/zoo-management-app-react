import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BusinessIcon from '@mui/icons-material/Business';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";
import getAllItems from "../apis/getApis";

function SidebarComponent() {
  const [zoos, setZoos] = useState([]);

  const [collapsed, setCollapsed] = useState(false)

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };



  useEffect(() => {
    getAllItems('zoos')
    .then(fetchedItems => {
      if (fetchedItems)
        setZoos(fetchedItems);
      else
        console.error("Unexpected result returned from getZoos: ", fetchedItems);
  })
  .catch(e => {console.error("Error calling getZoos: ", e)}); 
  }, []);

  return (
    <div id="app">
      <Sidebar collapsed={collapsed} rtl={true} style={{height:"100%"}}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={handleToggleSidebar}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>
          <MenuItem component={<Link to="/" className="link" />} icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <SubMenu icon={<BusinessIcon />} label='Zoos'>
            <MenuItem component={<Link to="/zoos" className="link" />}> <strong>All Zoos</strong> </MenuItem>
            <div>
            {zoos.map(zoo => 
             <MenuItem component={<Link to={`/zoos/${zoo.id}`} className="link">{zoo.name}</Link>} key={zoo.id}> {zoo.name} </MenuItem>)}
            </div>
            </SubMenu>
          <SubMenu icon={<PetsIcon />} label='Animals'>
          <MenuItem component={<Link to="/animals/" className="link" />} > <strong>All Animals</strong></MenuItem>
            <MenuItem component={<Link to="/animals/amphibians" className="link" />}  > Amphibians </MenuItem>
            <MenuItem component={<Link to="/animals/birds" className="link" />}  >Birds </MenuItem>
            <MenuItem component={<Link to="/animals/fishes" className="link" />}  > Fish </MenuItem>
            <MenuItem component={<Link to="/animals/insects" className="link" />}   > Insects </MenuItem>
            <MenuItem component={<Link to="/animals/mammals" className="link" />}   >Mammals </MenuItem>
            <MenuItem component={<Link to="/animals/reptiles" className="link" />}   > Reptiles </MenuItem>
            </SubMenu>
        </Menu>
      </Sidebar>
      <main>

      </main>
    </div>
  );
}

export default SidebarComponent;