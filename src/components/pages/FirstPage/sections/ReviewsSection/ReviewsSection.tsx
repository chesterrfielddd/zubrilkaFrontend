import { useRef, useState, useCallback, useEffect } from "react";
import { Autoplay, Navigation, A11y, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import classes from "./ReviewsSection.module.css";
import "./ReviewsSection.css"

export default function ReviewsSection({ ...props }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [slides, setSlides] = useState([]);
  const fetchSlides = useCallback(async () => {
    const response = await fetch("src/assets/jsons/testreviews.json");
    const slides = await response.json();
    setSlides(slides);
  }, []);

  useEffect(() => {
    fetchSlides();
  }, [fetchSlides]);
  return (
    <div className={classes.reviews} {...props}>
      <div className={classes.reviews__wrapper}>
        <div className={classes.reviews__textBox}>
          <h2 className={classes.reviews__title}>Наши Ученики</h2>
          <p className={classes.reviews__subtitle}>
            Мы заботимся о контроле качества нашей платформы, и, поэтому,
            регулярно проводим опросы новых пользователей
          </p>
        </div>

        <Swiper
          className={classes.swiper}
          modules={[Autoplay, Pagination, Navigation, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          loop
          autoplay={{
            delay: 3000,
          }}
          speed={3000}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
        >
          {slides.reviews?.map((slide) => (
            <SwiperSlide
              key={`${slide.name}${slide.description}${slide.image}`}
              className={classes.swiperSlide}
            >
              <div className={classes.card__head}>
                <div className={classes.card__imgCont}>
                  <img src={slide.image} alt="" className={classes.card__img} />
                </div>
                <div className={classes.card__name}>{slide.name}</div>
              </div>
              <div className={classes.card__text}>{slide.description}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
