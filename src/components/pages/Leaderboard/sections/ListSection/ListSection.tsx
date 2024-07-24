import styles from "./ListSection.module.css";

export default function ListSection({ leadersList, testData }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textbox}>
          <h3 className={styles.suptitle}>Таблица лидеров по испытанию</h3>
          <h2 className={styles.title}>{testData?.title}</h2>
      </div>
      <div className={styles.list_wrapper}>
          {leadersList?.results.map((item, index) => (
            <div key={index} className={styles.stroke}>
              <span className={styles.place}>{index + 1}</span>
              <div className={styles.user}>
                <div className={styles.avataer_wrapper}>
                  <img src="" alt="" className={styles.avatar} />
                </div>
                <span className={styles.username}>{item.username}</span>
              </div>
              <span className={styles.score}>{item.time_result.slice(2, -1)} сек</span>
            </div>
          ))}
      </div>
    </div>
  );
}
