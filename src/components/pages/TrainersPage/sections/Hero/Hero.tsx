import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Наши Тренажеры</h1>
      <input type="text" className={styles.input} placeholder="Поиск по тренажерам" />
    </div>
  );
}
