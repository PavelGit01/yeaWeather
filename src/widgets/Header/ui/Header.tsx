import { NavBar } from "@/feautures/navigations";
import { Logo } from "@/shared/ui";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.container}`}>
        <Logo />
        <NavBar />
      </div>
    </header>
  );
};
export default Header;
