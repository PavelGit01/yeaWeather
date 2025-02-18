import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  children: ReactNode;
}

const EmptyComponent = ({ children }: Props) => {
  return <h3 className={styles.emptyComponent}>{children}</h3>;
};

export default EmptyComponent;
