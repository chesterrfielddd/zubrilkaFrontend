import styles from "./CookieModalContent.module.css";

export default function CookieModalContent({ onClick }) {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <button className={styles.button} onClick={onClick}>
        Войти
      </button>
      <p>
        <b>Внимание</b> вам необходимо авторизоваться для использования этого
        сегмента
      </p>
    </div>
  );
}
