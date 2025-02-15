import { NavBar } from "@/feautures/navigations";
import { ContainerWrapper, Logo } from "@/shared/ui";
import styles from "./styles.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <ContainerWrapper className={styles.container}>
        <Logo />
        <NavBar />
      </ContainerWrapper>
    </header>
  );
};
export default Header;
