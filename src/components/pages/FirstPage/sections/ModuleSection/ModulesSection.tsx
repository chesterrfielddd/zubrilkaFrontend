import { Autoplay, Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import classes from "./ModuleSection.module.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { trainersApi } from "../../../../../services/TrainersService";

export default function ModulesSection({ ...props }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef(null);

  const { data: trainers } = trainersApi.useFetchAllTrainersQuery();

  return (
    <div className={classes.modules} {...props}>
      <div className={classes.linkBox}>
        <Link className={classes.modules__title} to={"/trainers"}>
          Наши тренажеры
        </Link>
      </div>
      <Swiper //АДАПТИВЫ ХУЕТА
        ref={swiperRef}
        className={classes.swiper}
        modules={[Autoplay, Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        breakpoints={{
          720: {
            slidesPerView: 2,
            spaceBetween: 40,
            centeredSlides: true,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 3000,
        }}
        speed={1000}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          // swiperRef.current?.swiper.disable();
        }}
      >
        {trainers?.map((slide) => (
          <SwiperSlide key={`${slide.id}`} className={classes.swiperSlide}>
            <div className={classes.card__imgCont}>
              <span className={classes.card__label}>{slide.category}</span>
              <img src={slide.image} alt="" className={classes.card__img} />
            </div>
            <h3 className={classes.card__title}>{slide.title}</h3>
            <p className={classes.card__text}>{slide.text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div ref={navigationPrevRef} className={classes.leftButton} />
      <div ref={navigationNextRef} className={classes.rightButton} />
    </div>
  );
}
