import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BusinessIcon from '@mui/icons-material/Business';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from "react-router-dom";

function SidebarComponent() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div id="app" style={( { display: "flex", flexDirection: "row-reverse"  })}>
      <Sidebar rtl={true}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>
          <MenuItem component={<Link to="/" className="link" />} icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <SubMenu component={<Link to="/zoos" className="link" />} icon={<BusinessIcon />} label='Zoos'>
            <MenuItem> Cheshire Zoo </MenuItem>
            <MenuItem> Edinburgh Zoo </MenuItem>
            <MenuItem> London Zoo </MenuItem>
            </SubMenu>
          <SubMenu component={<Link to="/animals" className="link" />} icon={<PetsIcon />} label='Animals'>
            <MenuItem> Amphibians </MenuItem>
            <MenuItem> Birds </MenuItem>
            <MenuItem> Fish </MenuItem>
            <MenuItem> Insects </MenuItem>
            <MenuItem> Mammals </MenuItem>
            <MenuItem> Reptiles </MenuItem>
            </SubMenu>
        </Menu>
      </Sidebar>
      <main>

      </main>
    </div>
  );
}

export default SidebarComponent;