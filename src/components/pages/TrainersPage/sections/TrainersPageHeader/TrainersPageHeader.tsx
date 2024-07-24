import styles from "./TrainersPageHeader.module.css";
import logo from "../../../assets/images/Rectangle.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function TrainersPageHeader({
  setIsRegModalACtive,
  setActiveModalSlide,
  goToSlide,
  userInfo,
}) {
  return (
    <div className={styles.header__wrapper}>
      <Link className={styles.header__logobox} to={"/"}>
        <img src={logo} alt="" className={styles.header__logoimg} />
        <span className={styles.header__logotext}>Zubrilka</span>
      </Link>
      {/* <div className={styles.header__nav}>
        <a href="#trainers" className={styles.header__navitem}>
          Тренажеры
        </a>
        <a href="#about" className={styles.header__navitem}>
          О нас
        </a>
        <a href="#reviews" className={styles.header__navitem}>
          Отзывы
        </a>
        <a href="#faq" className={styles.header__navitem}>
          FAQ
        </a>
      </div> */}
      {userInfo ? (
        <Link className={styles.lk_link} to={'/personalarea'}>{userInfo.username}</Link>
      ) : (
        <span
          className={styles.header__enterbtn}
          id="enterButton"
          onClick={() => {
            setIsRegModalACtive(true);
            goToSlide(1);
          }}
        >
          Войти
        </span>
      )}
    </div>
  );
}
