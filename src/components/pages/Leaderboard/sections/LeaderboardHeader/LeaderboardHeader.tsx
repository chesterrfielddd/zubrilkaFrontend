import styles from "./LeaderboardHeader.module.css";
import logo from "../../../assets/images/Rectangle.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function TrainersPageHeader({ userInfo }) {
  return (
    <div className={styles.header__wrapper}>
      <Link className={styles.header__logobox} to={"/"}>
        <img src={logo} alt="" className={styles.header__logoimg} />
        <span className={styles.header__logotext}>Zubrilka</span>
      </Link>
      {userInfo ? (
        <Link className={styles.lk_link} to={"/personalarea"}>
          {userInfo.username}
        </Link>
      ) : (
        <span>Авторизуйтесь</span>
      )}
    </div>
  );
}
