import { Link } from "react-router-dom";
import { NavbarType } from "../types";

const Navbar = ({ openDrawer, setOpenDrawer }: NavbarType) => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <h1 className="navbar__left__logo">Hotel Ranking</h1>
        </Link>
      </div>
      <div className="navbar__right">
        <div
          className={
            openDrawer ? "navbar__right__icon open" : "navbar__right__icon"
          }
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navbar__right__links">
          <Link to="/">Home</Link>
          <Link to="/chains">Chains</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
