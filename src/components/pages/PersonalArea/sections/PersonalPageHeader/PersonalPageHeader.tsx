import styles from "./PersonalPageHeader.module.css";
import logo from "../../../assets/images/Rectangle.png";
import { Link } from "react-router-dom";

export default function PersonalPageHeader() {
  return (
    <div className={styles.header__wrapper}>
      <Link className={styles.header__logobox} to={"/"}>
        <img src={logo} alt="" className={styles.header__logoimg} />
        <span className={styles.header__logotext}>Zubrilka</span>
      </Link>
      <span className={styles.lk_link}>Личный кабинет</span>
    </div>
  );
}
