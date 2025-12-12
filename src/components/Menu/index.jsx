import { NavLink } from "react-router";
import "./Menu.css";

export default function Menu() {
  return (
    <nav aria-label="MainNavigation">
      <ul>
        <li>
          <NavLink
            to="/" 
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
            <NavLink
            to="/Store"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            >Store</NavLink>
        </li>
        <li>
            <NavLink
            to="/Service"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            >Service</NavLink>
        </li>
      </ul>
    </nav>
  );
}
