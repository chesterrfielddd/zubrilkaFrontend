import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./RegModalContent.module.css";
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
// import config from "../../../../config";
import { useState } from "react";
import hiddenEyeIcon from "../../../assets/icons/hide-regular-24.png";
import shownEyeIcon from "../../../assets/icons/show-alt-regular-24.png";

const Error = styled.div`
  color: red;
  font-weight: 500;
`;

export default function RegModalContent({
  activeSlide,
  setActiveSlide,
  goToSlide,
  swiperRef,
  setIsActive,
  setUserInfo,
}) {
  const regForm = useForm();
  const {
    register: registerReg,
    handleSubmit: handleSubmitReg,
    formState: { regErrors, isRegSubmitting },
    reset: resetReg,
  } = regForm;

  const [isRegPassShown, setIsRegPassShown] = useState(false);
  function handleRegEyeClick() {
    setIsRegPassShown(!isRegPassShown);
  }

  async function onRegSubmit(data) {
    try {
      const response = await fetch(`${config.apiUrl}users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Data has been successfully sent");
        goToSlide(1);
        resetReg();
      } else {
        console.error("Error:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const logForm = useForm();
  const {
    register: registerLog,
    handleSubmit: handleSubmitLog,
    formState: { logErrors, isLogSubmitting },
    reset: resetLog,
  } = logForm;

  const [isLogPassShown, setIsLogPassShown] = useState(false);
  function handleLogEyeClick() {
    setIsLogPassShown(!isLogPassShown);
  }

  async function onLogSubmit(data) {
    try {
      const response = await axios.post(`${config.apiUrl}auth/login/`, data, {
        withCredentials: true,
      });
      console.log(response.data);
      resetLog();
      setIsActive(false);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchUserData() {
    try {
      const response = await axios.get(
        `https://www.zubrilka.space/api/users/me/`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  const fetchData = async () => {
    const response = await fetchUserData();
    if (response === undefined) {
      setUserInfo(false);
    } else {
      setUserInfo(response);
    }
  };

  return (
    <>
      <div className={styles.modal__head}>
        <span
          className={
            activeSlide === 0
              ? `${styles.modal__regBtn} ${styles.modal__btn_active}`
              : styles.modal__regBtn
          }
          onClick={() => goToSlide(0)}
        >
          Регистрация
        </span>
        <span
          className={
            activeSlide === 1
              ? `${styles.modal__regBtn} ${styles.modal__btn_active}`
              : styles.modal__regBtn
          }
          onClick={() => goToSlide(1)}
        >
          Вход
        </span>
      </div>
      <Swiper
        className={styles.swiper}
        spaceBetween={20}
        slidesPerView={1}
        autoHeight
        ref={swiperRef}
        onSlideChange={() => {
          setActiveSlide(swiperRef.current?.swiper.activeIndex);
        }}
      >
        <SwiperSlide>
          <form
            onSubmit={handleSubmitReg(onRegSubmit)}
            className={styles.modal__form}
          >
            <input
              {...registerReg("email", {
                required: "Invalid email address",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              type="text"
              className={styles.modal__input}
              placeholder="Эл. Почта"
            />
            {/* {errors.email && <Error>{errors.email.message}</Error>} */}
            <input
              {...registerReg("username", {
                required: "Required",
              })}
              type="text"
              className={styles.modal__input}
              placeholder="Никнейм"
            />
            {/* {errors.username && <Error>{errors.username.message}</Error>} */}
            <div className={styles.passwordContainer}>
              <input
                {...registerReg("password", {
                  required: "Password minimum length is 8 symbols",
                  minLength: 8,
                })}
                type={isRegPassShown ? "text" : "password"}
                className={styles.modal__input}
                placeholder="Пароль"
              />
              <div
                className={styles.passwordIconCont}
                onClick={handleRegEyeClick}
              >
                <img
                  className={styles.passwordIcon}
                  src={isRegPassShown ? shownEyeIcon : hiddenEyeIcon}
                  alt=""
                />
              </div>
            </div>
            {/* {errors.password && <Error>{errors.password.message}</Error>} */}
            <div className={styles.modal__checkboxBox}>
              <input
                {...registerReg("political", {
                  required: true,
                })}
                type="checkbox"
                className={styles.modal__checkbox}
              />
              {/* {errors.privacyAgreement && (
                <Error>{errors.privacyAgreement.message}</Error>
              )} */}
              <label
                htmlFor="privateCheckbox"
                className={styles.modal__checkboxLabel}
              >
                Согласен с Политикой конфиденциальности
              </label>
            </div>
            <div className={styles.modal__checkboxBox}>
              <input
                {...registerReg("notifications")}
                type="checkbox"
                className={styles.modal__checkbox}
              />
              <label
                htmlFor="privateCheckbox"
                className={styles.modal__checkboxLabel}
              >
                Согласен на новостную рассылку
              </label>
            </div>
            <button
              disabled={isRegSubmitting}
              className={styles.modal__button}
              type="submit"
            >
              {isRegSubmitting ? "Loading..." : "Отправить"}
            </button>
          </form>
        </SwiperSlide>
        <SwiperSlide>
          <form
            onSubmit={handleSubmitLog(onLogSubmit)}
            className={styles.modal__form}
          >
            <input
              {...registerLog("email", {
                required: "Invalid email address",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              type="text"
              className={styles.modal__input}
              placeholder="Эл. Почта"
            />
            <div className={styles.passwordContainer}>
              <input
                {...registerLog("password", {
                  required: "invalid password",
                })}
                type={isLogPassShown ? "text" : "password"}
                className={styles.modal__input}
                placeholder="Пароль"
              />
              <div
                className={styles.passwordIconCont}
                onClick={handleLogEyeClick}
              >
                <img
                  className={styles.passwordIcon}
                  src={isLogPassShown ? shownEyeIcon : hiddenEyeIcon}
                  alt=""
                />
              </div>
            </div>
            <div className={styles.modal__checkboxBox}>
              <input
                {...registerLog("remember")}
                type="checkbox"
                className={styles.modal__checkbox}
              />
              <label
                htmlFor="rememberCheckbox"
                className={styles.modal__checkboxLabel}
              >
                Запомнить меня
              </label>
            </div>
            {/* <Link className={styles.modal__button} to={"./personalarea"}>
              Отправить
            </Link> */}
            <button
              disabled={isLogSubmitting}
              className={styles.modal__button}
              type="submit"
            >
              {isLogSubmitting ? "Loading..." : "Отправить"}
            </button>
          </form>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
