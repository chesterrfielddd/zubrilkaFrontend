import styles from "./TestPageHeader.module.css";
import logo from "../../../assets/images/Rectangle.png";
import { useState, useEffect, useRef } from "react";

export default function TestPageHeader({ testData, isTimerRunning }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (isTimerRunning) {
      timeInc();
    }
    return () => clearInterval(timeHandler.current);
  }, [isTimerRunning]); // Добавляем isTimerRunning в зависимость эффекта, чтобы он переинициализировался при изменении

  let timeHandler = useRef();

  function timeInc() {
    timeHandler.current = setInterval(() => {
      if (!isTimerRunning) {
        return;
      }
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          setMinutes((prevMinutes) => prevMinutes + 1);
          return 0;
        } else {
          return prevSeconds + 1;
        }
      });
    }, 1000);
  }

  return (
    <div className={styles.header__wrapper}>
      <span className={styles.header__logobox}>
        <img src={logo} alt="" className={styles.header__logoimg} />
        <span className={styles.header__logotext}>Zubrilka</span>
      </span>
      <span className={styles.lk_link}>
        {String(minutes / 2).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")} | {testData?.title}
      </span>
    </div>
  );
}
