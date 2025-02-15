import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const NavBar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.isActive : styles.notActive
        }
        to={"/"}
      >
        Weather
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.isActive : styles.notActive
        }
        to={"/history"}
      >
        History Search
      </NavLink>
    </nav>
  );
};

export default NavBar;
