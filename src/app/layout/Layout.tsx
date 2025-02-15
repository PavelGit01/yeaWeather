import { ContainerWrapper } from "@/shared/ui";
import { Footer, Header } from "@/widgets";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";

export const Layout: React.FC = () => {
  return (
    <section className={styles.section}>
      <Header />
      <main className={styles.main}>
        <ContainerWrapper>
          <Outlet />
        </ContainerWrapper>
      </main>
      <Footer />
    </section>
  );
};
