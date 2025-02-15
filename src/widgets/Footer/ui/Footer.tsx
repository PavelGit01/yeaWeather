import { ContainerWrapper, Logo } from "@/shared/ui";
import styles from "./styles.module.css";
import { NavBar } from "@/feautures/navigations";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ContainerWrapper className={styles.wrapper}>
        <Logo />
        <NavBar />
        <p className={styles.copirightText}>&copy;2025 YeaWeather</p>
      </ContainerWrapper>
    </footer>
  );
};

export default Footer;
