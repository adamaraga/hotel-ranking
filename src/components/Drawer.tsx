import { Link } from "react-router-dom";
import { NavbarType } from "../types";

const Drawer = ({ openDrawer, setOpenDrawer }: NavbarType) => {
  return (
    <div className={openDrawer ? "drawer open" : "drawer"}>
      <ul className="drawer__links">
        <li>
          <Link to="/" onClick={() => setOpenDrawer(!openDrawer)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/chains" onClick={() => setOpenDrawer(!openDrawer)}>
            Chains
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
