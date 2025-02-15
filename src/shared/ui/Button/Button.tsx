import React, { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
  onClick: () => void;
};

const Button: React.FC<Props> = ({ children, type, onClick }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
