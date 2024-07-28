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
import { useState, useRef } from "react";

const FirstPage = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isCookieModalActive, setIsCookieModalActive] = useState(true);
  const [activeModalSlide, setActiveModalSlide] = useState(0);
  const swiperRef = useRef(null);
  
  function handleCookieModalClick() {
    setIsCookieModalActive(false);
  }
  
  function handleHeaderLoginBtnClick() {
    setIsModalActive(true);
    goToSlide(1);
  }
  
  // const [userInfo, setUserInfo] = useState(null);
  // async function fetchUserData() {
  //   try {
  //     const response = await axios.get(
  //       `https://www.zubrilka.space/api/users/me/`,
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.error("Error fetching data: ", error);
  //   }
  // }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetchUserData();
  //     if (response !== undefined) {
  //       setIsCookieModalActive(false);
  //       setUserInfo(response);
  //     }
  //   };

  //   fetchData();
  // }, []);

  function goToSlide(slideIndex: number) {
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
          // setUserInfo={setUserInfo}
        />
      </RegModal>
      {isCookieModalActive && (
        <CookieModal variant="primary" onClick={handleCookieModalClick} />
      )}
      <Header variant="main" onClick={handleHeaderLoginBtnClick} userInfo={false} />
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

export default FirstPage;