import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
<nav className="navbar">
<div className="nav-logo">Consistency Checker</div>
<div className="nav-links">
<NavLink to="/"className={({ isActive }) =>isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
<NavLink to="/upload"className={({ isActive }) =>isActive ? "nav-link active" : "nav-link"}> Upload Novel</NavLink>
<NavLink to="/backstory"className={({ isActive }) =>isActive ? "nav-link active" : "nav-link" }> Add Backstory</NavLink>
<NavLink to="/check-consistency"className={({ isActive }) =>isActive ? "nav-link active" : "nav-link" }>Check Consistency</NavLink>
</div>
</nav>
  );
};

export default Navbar;
