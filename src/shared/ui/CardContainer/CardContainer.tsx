import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
  type?: "card" | "banner";
  className?: string;
};

const CardContainer = ({ children, type = "card", className }: Props) => {
  return (
    <article
      className={`${className ?? ""} ${styles.container} ${
        type === "card" ? styles.card : styles.banner
      }`}
    >
      {children}
    </article>
  );
};

export default CardContainer;
