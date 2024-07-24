import styles from "./RegButton.module.css";

export default function RegButton({ children, ...props }) {
  return (
    <button className={styles.regButton} {...props}>
      {children}
    </button>
  );
}
