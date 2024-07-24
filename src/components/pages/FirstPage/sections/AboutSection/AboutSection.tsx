import classes from "./AboutSection.module.css";

import picture1 from "../../../../../assets/images/about-pic1.jpg"
import picture2 from "../../../../../assets/images/about-pic2.jpg"

export default function AboutSection({ ...props }) {
  return (
    <div className={classes.about} {...props}>
      <div className={classes.about__wrapper}>
        <div className={classes.about__column}>
          <h2 className={classes.about__title}>О Нас</h2>
          <div className={classes.about__textBox}>
            <h3 className={classes.about__textitle}>Что такое Zubrilka?</h3>
            <p className={classes.about__text}>
              Zubrilka предоставляет возможность всем обучающимся, от 1 класса
              до выпускного курса, выполнять задания на тренажерах, оттачивая
              навыки владения различными дисциплинами.
            </p>
          </div>
          <div
            className={`${classes.about__imgCont} ${classes.about__imgCont_2}`}
          >
            <img
              src={picture1}
              alt=""
              className={classes.about__img}
            />
          </div>
        </div>
        <div className={classes.about__column}>
          <div
            className={`${classes.about__imgCont} ${classes.about__imgCont_2}`}
          >
            <img
              src={picture2}
              alt=""
              className={classes.about__img}
            />
          </div>
          <div className={classes.about__textBox}>
            <h3 className={classes.about__textTitle}>Что такое Zubrilka?</h3>
            <p className={classes.about__text}>
              Во время учебы в ВУЗе наша команда заметила практически полное
              отсутствие русскоязычных платформ, предоставляющих возможность
              безпрепятственно заниматься как с ПК, так и с мобильных устройств.
            </p>
            <p className={classes.about__text}>
              Так мы и решили заняться разработкой собственной образовательной
              платформы.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
