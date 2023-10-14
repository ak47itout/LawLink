import { useState, } from "react";
import { NavLink } from 'react-router-dom';
import Classes from "./NavBar.module.css";


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>        
      <div className={click ? Classes.main_container : ""} onClick={() => Close()} />
      <nav className={Classes.navbar} onClick={(e) => e.stopPropagation()}>
        <div className={Classes.nav_container}>
          <NavLink exact to="/" className={Classes.nav_logo}>
            LawyerRight
            <i className="fa fa-gavel"></i>
          </NavLink>
           <ul className={click ? [Classes.nav_menu,Classes.active].join(' ') : Classes.nav_menu}>
            <li className={Classes.nav_item}>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className={Classes.nav_links}
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className={Classes.nav_item}>
              <NavLink
                exact
                to="/present-case"
                activeClassName="active"
                className={Classes.nav_links}
                onClick={click ? handleClick : null}
              >
                Present your Case
              </NavLink>
            </li>
            <li className={Classes.nav_item}>
              <NavLink
                exact
                to="/check-status"
                activeClassName="active"
                className={Classes.nav_links}
                onClick={click ? handleClick : null}
              >
                Check Status
              </NavLink>
            </li>
            <li className={Classes.nav_item}>
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className={Classes.nav_links}
                onClick={click ? handleClick : null}
              >
                Attorney Login
              </NavLink>
            </li>
          </ul>
          <div className={Classes.nav_icon} onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
        
      </nav>
    </div>
  );
}
export default NavBar;