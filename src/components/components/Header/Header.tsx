import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { FC } from "react";
import logo from "../../../assets/images/Rectangle.png";

interface HeaderProps {
  variant: "main" | "lk" | "secondary";
  onClick: () => void;
  userInfo: boolean;
}

const Header: FC<HeaderProps> = ({ variant, onClick, userInfo }) => {
  return (
    <div className={styles.header__container}>
      {variant === "main" ? (
        <div className={styles.header__wrapper}>
          <Link className={styles.header__logobox} to={"/"}>
            <img src={logo} alt="" className={styles.header__logoimg} />
            <span className={styles.header__logotext}>Zubrilka</span>
          </Link>
          <div className={styles.header__nav}>
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
          </div>
          {userInfo ? (
            <Link className={styles.lk_link} to={"/personalarea"}>
              {/* {userInfo.username} */}xmpl name
            </Link>
          ) : (
            <span
              className={styles.header__enterbtn}
              id="enterButton"
              onClick={onClick}
            >
              Войти
            </span>
          )}
        </div>
      ) : (
        <h1>nope</h1>
      )}
    </div>
  );
};

export default Header;