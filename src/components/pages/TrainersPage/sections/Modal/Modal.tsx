import classes from "./Modal.module.css";
import { useState, useEffect, useRef } from "react";
import Challenge from "../../../components/Challenge/Challenge";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../../../../config";

export default function Modal({ setIsActive, trainerId }) {
  const [trainerInfo, setTrainerInfo] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const swiperRef = useRef(null);

  const fetchTrainerInfo = async (trainerId) => {
    // setIsLoading(true);

    try {
      const response = await axios.get(
        `${config.apiUrl}trainings/${trainerId}/`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (e) {
      console.error("Error: ", e);
      setError(e);
    }
    // finally {
    //   setIsLoading(false);
    // }
  };

  useEffect(() => {
    const fetchData = async (trainerId) => {
      const response = await fetchTrainerInfo(trainerId);
      setTrainerInfo(response);
    };

    fetchData(trainerId);
  }, [trainerId]);

  function handleChallengeClick(challengeId) {
    setSelectedProduct(
      trainerInfo.challenges.find((challenge) => challenge.id === challengeId)
    );
    swiperRef.current?.swiper.slideTo(1);
  }

  return (
    <div
      className={`${classes.modal} ${classes.modal_active}`}
      onClick={() => setIsActive(false)}
    >
      <div
        className={classes.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        {/* {isLoading && <div>Loading...</div>} */}
        {error && <div>Авторизуйтесь</div>}
        {trainerInfo && (
          <Swiper
            className={classes.swiper}
            allowTouchMove={false}
            spaceBetween={20}
            slidesPerView={1}
            autoHeight
            ref={swiperRef}
          >
            <SwiperSlide>
              <div className={classes.mainBlock}>
                <div className={classes.trainerInfo}>
                  <h3 className={classes.trainerName}>{trainerInfo.name}</h3>
                  <div className={classes.hr}></div>
                  <p className={classes.text}>{trainerInfo.description}</p>
                  <div className={classes.titlesCont}>
                    <div className={classes.infoCont}>
                      <h4 className={classes.parametr}>Создатель:</h4>
                      <h4 className={classes.parametr}>Дата создания:</h4>
                    </div>
                    <div className={classes.infoCont}>
                      <p className={classes.text}>{trainerInfo.author}</p>
                      <p className={classes.text}>{trainerInfo.time_created}</p>
                    </div>
                  </div>
                </div>
                <div className={classes.challengesContainer}>
                  {trainerInfo.challenges?.map((item) => (
                    <Challenge
                      name={item.title}
                      description={item.description}
                      image={item.photo}
                      key={item.id}
                      onClick={() => {
                        handleChallengeClick(item.id);
                      }}
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.mainBlock}>
                <div className={classes.trainerInfo}>
                  <h3 className={classes.trainerName}>
                    {selectedProduct?.title}
                  </h3>
                  <div className={classes.hr}></div>
                  <p className={classes.text}>{selectedProduct?.description}</p>
                  <div className={classes.titlesCont}>
                    <div className={classes.infoCont}>
                      <h4 className={classes.parametr}>Создатель:</h4>
                      <h4 className={classes.parametr}>Количество вопросов:</h4>
                    </div>
                    <div className={classes.infoCont}>
                      <p className={classes.text}>{selectedProduct?.author}</p>
                      <p className={classes.text}>
                        {selectedProduct?.question_count}
                      </p>
                    </div>
                  </div>
                  <div className={classes.btnCont}>
                    <Link
                      className={classes.leaders_btn}
                      to={`/challenge/${selectedProduct?.slug}/leaderboard`}
                    >
                      Таблица лидеров
                    </Link>
                    <Link
                      className={classes.btn}
                      to={`/challenge/${selectedProduct?.slug}`}
                    >
                      Начать
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      </div>
    </div>
  );
}
