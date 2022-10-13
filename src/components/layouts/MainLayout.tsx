import { useState } from "react";
import { Children } from "../../types";
import Drawer from "../Drawer";
import Navbar from "../Navbar";

export const MainLayout = ({ children }: Children) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <div className="mainLayout">
      <Navbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      {children}
    </div>
  );
};
