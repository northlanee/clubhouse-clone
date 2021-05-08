import clsx from "clsx";
import styles from "./StepLayout.module.scss";

export const StepLayout = ({ children, className }) => {
  return <div className={clsx(styles.block, className)}>{children}</div>;
};
