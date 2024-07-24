import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import CookieModal from "../../components/CookieModal/CookieModal";
import RegModal from "../../components/RegModal/RegModal";
import RegModalContent from "../../components/RegModalContent/RegModalContent";
import Hero from "./sections/Hero/Hero";
import ModulesSection from "./sections/ModuleSection/ModulesSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import ReviewsSection from "./sections/ReviewsSection/ReviewsSection";
import FaqSection from "./sections/FaqSection/FaqSection";
import CookieModalContent from "./sections/CookieModalContent/CookieModalContent";
import FirstPageHeader from "./sections/FirstPageHeader/FirstPageHeader";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function FirstPage() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isCookieModalActive, setIsCookieModalActive] = useState(null);
  const [activeModalSlide, setActiveModalSlide] = useState(0);
  const [userInfo, setUserInfo] = useState(null);
  const swiperRef = useRef(null);

  function handleCookieModalClick() {
    setIsCookieModalActive(false);
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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchUserData();
      if (response === undefined) {
        setIsCookieModalActive(true);
        setUserInfo(false);
      } else {
        setIsCookieModalActive(false);
        setUserInfo(response);
      }
    };

    fetchData();
  }, []);

  function goToSlide(slideIndex) {
    swiperRef.current && swiperRef.current?.swiper.slideTo(slideIndex);
    setActiveModalSlide(slideIndex);
  }

  return (
    <>
      <RegModal isActive={isModalActive} setIsActive={setIsModalActive}>
        <RegModalContent
          activeSlide={activeModalSlide}
          setActiveSlide={setActiveModalSlide}
          goToSlide={goToSlide}
          swiperRef={swiperRef}
          setIsActive={setIsModalActive}
          setUserInfo={setUserInfo}
        />
      </RegModal>
      {isCookieModalActive && (
        <CookieModal>
          <CookieModalContent onClick={handleCookieModalClick} />
        </CookieModal>
      )}
      <Header>
        <FirstPageHeader
          setIsRegModalACtive={setIsModalActive}
          setActiveModalSlide={setActiveModalSlide}
          goToSlide={goToSlide}
          userInfo={userInfo}
        />
      </Header>
      <Hero
        setIsRegModalACtive={setIsModalActive}
        setActiveModalSlide={setActiveModalSlide}
        goToSlide={goToSlide}
      />
      <Main>
        <ModulesSection id="trainers" />
        <AboutSection id="about" />
      </Main>
      <ReviewsSection id="reviews" />
      <FaqSection id="faq" />
      <Footer />
    </>
  );
}
