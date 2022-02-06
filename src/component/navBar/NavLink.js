import { Link } from "react-router-dom";

const NavLink = (props) => {
  return (
    <nav>
      <ul>
        <li onClick={() => props.isMobile && props.closeMobilMenu()}>
          <Link to="/">Home</Link>
        </li>

        <li onClick={() => props.isMobile && props.closeMobilMenu()}>
          <Link to="/about">About</Link>
        </li>

        <li onClick={() => props.isMobile && props.closeMobilMenu()}>
          <Link to="/Infromation">profile</Link>
        </li>

        <li onClick={() => props.isMobile && props.closeMobilMenu()}>
          <Link to="/Infromation">Contact</Link>
        </li>

        <li onClick={() => props.isMobile && props.closeMobilMenu()}>
          <Link to="/">Tracking</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLink;
