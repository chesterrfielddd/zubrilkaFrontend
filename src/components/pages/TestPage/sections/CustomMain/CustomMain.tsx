import styles from "./CustomMain.module.css";

export default function CustomMain({ children }) {
  return <div className={styles.mainSec}>{children}</div>;
}
