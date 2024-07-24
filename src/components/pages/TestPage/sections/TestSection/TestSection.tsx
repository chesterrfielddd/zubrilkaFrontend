import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./TestSection.module.css";
import SwiperCore from "swiper";
import { Mousewheel } from "swiper/modules";
import arrowIcon from "../../../assets/icons/down-arrow-circle-regular-96.png";
import crossIcon from "../../../assets/icons/x-circle-regular-24.png";
import { Link } from "react-router-dom";

SwiperCore.use([Mousewheel]);

export default function TestSection({ testData, setIsTimerRunning, params }) {
  const swiperRef = useRef(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [finishTime, setFinishTime] = useState(null);
  // const [isLoading, setIsLoading] = useState(null);

  function Item({ item, index }) {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
      let answerData;
      if (item.answer.body.type === "text") {
        answerData = {
          slug: `${item.answer.slug}`,
          type: "text",
          options: null,
          right_options: [data.textAnswer],
        };
      } else if (item.answer.body.type === "checkbox") {
        answerData = {
          slug: `${item.answer.slug}`,
          type: "checkbox",
        };
        answerData.options = item.answer.body.options;
        answerData.right_options = data[item.answer.slug];
      } else if (item.answer.body.type === "radio") {
        answerData = {
          slug: `${item.answer.slug}`,
          type: "radio",
        };
        answerData.options = item.answer.body.options;
        answerData.right_options = [data[item.answer.slug]];
      }
      try {
        const response = await fetch(
          `https://www.zubrilka.space/api/answers/${item.answer.slug}/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
            body: JSON.stringify(answerData),
          }
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          })
          .then((data) => {
            setIsShown(true);
            if (data.status === true) {
              setIsCorrect(true);
              swiperRef.current?.swiper.enable();
            }
          });
      } catch (error) {
        console.error("Error:", error);
      }
    };

    return (
      <div className={styles.block}>
        <h3 className={styles.title}>Вопрос номер {index + 1}</h3>
        <p>{item.question.question}</p>
        <div className={styles.hr}></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          className={styles.container}
        >
          <div className={styles.answerBox}>
            {item.question.question_type === "text" && (
              <input
                type="text"
                className={styles.textInput}
                placeholder="Введите ответ"
                {...register("textAnswer")}
                autoComplete="off"
              />
            )}
            {item.question.question_type === "checkbox" &&
              item.answer.body.options?.map((option, index) => (
                <div className={styles.checkboxBox} key={index}>
                  <input
                    type="checkbox"
                    name={item.answer.slug}
                    id={option}
                    {...register(`${item.answer.slug}`)}
                    value={option}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            {item.question.question_type === "radio" &&
              item.answer.body.options?.map((option, index) => (
                <div className={styles.checkboxBox} key={index}>
                  <input
                    type="radio"
                    name={item.answer.slug}
                    id={option}
                    {...register(`${item.answer.slug}`)}
                    value={option}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
          </div>
          <div className={styles.buttonsContainer}>
            <button className={styles.resetButton} type="reset">
              Сброс
            </button>
            <button className={styles.checkButton} type="submit">
              Проверить
            </button>
            {isShown &&
              (isCorrect ? (
                <div className={`${styles.arrowContainer}`}>
                  <img src={arrowIcon} alt="" className={styles.arrow} />
                </div>
              ) : (
                <div className={`${styles.arrowContainer}`}>
                  <img src={crossIcon} alt="" className={styles.arrow} />
                </div>
              ))}
          </div>
        </form>
      </div>
    );
  }

  return (
    <Swiper
      className={styles.swiper}
      allowSlidePrev={false}
      spaceBetween={100}
      slidesPerView={1}
      direction={"vertical"}
      ref={swiperRef}
      modules={[Mousewheel]}
      mousewheel={true}
      onInit={() => {
        swiperRef.current?.swiper.disable();
      }}
      onSlideChange={async () => {
        swiperRef.current?.swiper.disable();
        setIsCorrect(false);
        setIsShown(false);
        if (swiperRef.current?.swiper.isEnd) {
          setIsTimerRunning(false);
          try {
            const response = await fetch(
              `https://www.zubrilka.space/api/challenges/${params}/finish/`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  accept: "application/json",
                },
                // body: ,
              }
            )
              .then((response) => {
                if (response.ok) {
                  return response.json();
                }
              })
              .then((data) => {
                setFinishTime(data);
              });
          } catch (error) {
            console.error("Error:", error);
          }
        }
      }}
    >
      {testData?.questions.map((item, index) => (
        <SwiperSlide className={styles.slide} key={index}>
          <Item item={item} index={index}></Item>
        </SwiperSlide>
      ))}
      <SwiperSlide className={styles.slide}>
        <div className={styles.block}>
          <div className={styles.contentBlock}>
            <div className={styles.content}>
              <div className={styles.titleBox}>
                <h2 className={styles.winTitle}>{testData?.title}</h2>
                <p className={styles.winSubtitle}>
                  Пройдено за {finishTime} секунд
                </p>
              </div>
              <div className={styles.buttonsContainer}>
                <Link to={"/"} className={styles.resetButton}>
                  Выход
                </Link>
                <Link className={styles.checkButton} to={"leaderboard"}>
                  Таблица лидеров
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
