import { Logo } from "@/shared/ui";
import styles from "./styles.module.css";
import { NavBar } from "@/feautures/navigations";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`wrapper ${styles.container}`}>
        <Logo />
        <NavBar />
        <p className={styles.copirightText}>&copy;2025 YeaWeather</p>
      </div>
    </footer>
  );
};

export default Footer;
