import styles from "./Trainer.module.css";

export default function Trainer({ name, description, img, subject, ...props }) {
  return (
    <div className={styles.wrapper} {...props}>
      <div className={styles.imgCont}>
        <span className={styles.label}>{subject}</span>
        <img src={img} alt="" className={styles.img} />
      </div>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.text}>{description}</p>
    </div>
  );
}
