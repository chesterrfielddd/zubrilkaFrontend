import classes from "./Hero.module.css";
import RegButton from "../../../../components/RegButton/RegButton";

import icon1 from "../../../../../assets/icons/icon1.svg";
import icon2 from "../../../../../assets/icons/icon2.svg";
import icon3 from "../../../../../assets/icons/icon3.svg";

export default function Hero({
  setIsRegModalACtive,
  setActiveModalSlide,
  goToSlide,
}) {
  return (
    <div className={classes.hero}>
      <div className={classes.hero_wrapper}>
        <div className={classes.hero__textarea}>
          <div className={classes.hero__textbox}>
            <h1 className={classes.hero__title}>
              Zubrilka - шаг вперед для всероссийского школьного образования!
            </h1>
            <p className={classes.hero__subtitle}>
              Присоединяйтесь к нашей новой удобной учебной платформе
            </p>
          </div>
          <RegButton
            onClick={() => {
              setIsRegModalACtive(true);
              goToSlide(0);
            }}
          >
            Регистрация
          </RegButton>
        </div>
        <div className={classes.hero__iconsbox}>
          <img
            src={icon1}
            alt=""
            className={`${classes.hero__icon} ${classes.hero__icon_1}`}
          />
          <img
            src={icon2}
            alt=""
            className={`${classes.hero__icon} ${classes.hero__icon_2}`}
          />
          <img
            src={icon3}
            alt=""
            className={`${classes.hero__icon} ${classes.hero__icon_3}`}
          />
        </div>
        <div
          className={`${classes.hero__bgcircle} ${classes.hero__bgcircle_1}`}
        ></div>
        <div
          className={`${classes.hero__bgcircle} ${classes.hero__bgcircle_2}`}
        ></div>
        <div
          className={`${classes.hero__bgcircle} ${classes.hero__bgcircle_3}`}
        ></div>
      </div>
    </div>
  );
}
