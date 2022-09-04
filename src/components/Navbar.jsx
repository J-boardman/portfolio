import { NavLink } from "react-router-dom";
import { DiJavascript1 } from "react-icons/di"

export default () => {
  
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "nav-active" : null)}
      >
        <DiJavascript1 className="nav-icon" style={{color:"var(--logo_js)"}} /> portfolio.js
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "nav-active" : null)}
      >
        <DiJavascript1 className="nav-icon" style={{color:"var(--logo_js)"}} /> projects.js
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "nav-active" : null)}
      >
        <DiJavascript1 className="nav-icon" style={{color:"var(--logo_js)"}} /> contact.js
      </NavLink>
    </nav>
  )
};