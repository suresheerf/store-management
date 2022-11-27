import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <>
      <Sidebar>
        <Menu>
          <MenuItem routerLink={<Link to="/home" />}> home </MenuItem>
          <MenuItem routerLink={<Link to="/paddu" />}> paddu </MenuItem>
          <MenuItem routerLink={<Link to="/products" />}>products</MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}
export default Sidenav;
