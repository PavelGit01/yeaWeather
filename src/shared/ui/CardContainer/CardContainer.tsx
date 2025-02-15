import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
  type?: "card" | "banner";
  className?: string;
};

const CardContainer: React.FC<Props> = ({
  children,
  type = "card",
  className,
}) => {
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
