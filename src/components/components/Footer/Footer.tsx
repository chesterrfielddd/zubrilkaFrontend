import classes from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__wrapper}>
        <h2 className={classes.footer__title}>Наши Контакты</h2>
        <div className={classes.footer__contentbox}>
          <div className={classes.footer__column}>
            <div className={classes.footer__socialsstroke}>
              <div className={classes.footer__socialsiconbox}>
                <img
                  src="src/assets/icons/vk-logo.svg"
                  alt=""
                  className={classes.footer__socialsicon}
                />
              </div>
              <p className={classes.footer__text}>@zubrilka</p>
            </div>
            <div className={classes.footer__socialsstroke}>
              <div className={classes.footer__socialsiconbox}>
                <img
                  src="src/assets/icons/tg-logo.svg"
                  alt=""
                  className={classes.footer__socialsicon}
                />
              </div>
              <p className={classes.footer__text}>@zubrilka</p>
            </div>
            <div className={classes.footer__socialsstroke}>
              <div className={classes.footer__socialsiconbox}>
                <img
                  src="src/assets/icons/mail-logo.svg"
                  alt=""
                  className={classes.footer__socialsicon}
                />
              </div>
              <p className={classes.footer__text}>@zubrilka</p>
            </div>
          </div>
          <div className={classes.footer__column}>
            <h3 className={classes.footer__columntitle}>По вопросам сотрудничества</h3>
            <p className={classes.footer__text}>Школьникам</p>
            <p className={classes.footer__text}>Студентам</p>
            <p className={classes.footer__text}>Учителям</p>
          </div>
          <div className={classes.footer__column}>
            <h3 className={classes.footer__columntitle}>Получать наши новости</h3>
            <div className={classes.footer__contactbox}>
              <form action="" className={classes.footer__form}>
                <input
                  type="email"
                  placeholder="mymail@mail.example"
                  className={classes.footer__input}
                />
                <button className={classes.footer__btn} type="submit">
                  <img
                    src="src/assets/icons/arrow.svg"
                    alt=""
                    className={classes.footer__btnicon}
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
