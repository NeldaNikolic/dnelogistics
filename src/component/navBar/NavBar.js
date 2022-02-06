import classes from "./NavBar.module.css";
import NavLink from "./NavLink";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const menuIconn = (
    <BsFillGrid3X3GapFill
      className={classes.MenuIcon}
      color="rgb(5, 0, 0)"
      onClick={() => setOpen(true)}
    />
  );

  const CloseIconn = (
    <BiX
      className={classes.MenuIcon}
      size="50px"
      color="rgb(5, 0, 0))"
      onClick={() => setOpen(false)}
    />
  );

  const closeMobilMenu = () => setOpen(false);
  return (
    <nav className={classes.FlexNav}>
      {open ? CloseIconn : menuIconn}
      {open && <NavLink isMobile={true} closeMobilMenu={closeMobilMenu} />}
    </nav>
  );
};

export default NavBar;
