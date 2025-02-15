import { ReactNode } from "react";
import styles from "./styles.module.css";

type ContainerWrapperProps = {
  children: ReactNode;
  className?: string;
};

const ContainerWrapper: React.FC<ContainerWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`${styles.wrapper} ${className ? className : ""}  `}>
      {children}
    </div>
  );
};

export default ContainerWrapper;
