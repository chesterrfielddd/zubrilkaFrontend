import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import CookieModal from "../../components/CookieModal/CookieModal";
import RegModal from "../../components/RegModal/RegModal";
import RegModalContent from "../../components/RegModalContent/RegModalContent";
import Modal from "./sections/Modal/Modal";
import Hero from "./sections/Hero/Hero";
import CookieModalContent from "./sections/CookieModalContent/CookieModalContent";
import TrainersPageHeader from "./sections/TrainersPageHeader/TrainersPageHeader";
import TrainersList from "./sections/TrainersList/TrainersList";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function TrainersPage() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isRegModalActive, setIsRegModalActive] = useState(false);
  const [activeModalSlide, setActiveModalSlide] = useState(0);
  const [isCookieModalActive, setIsCookieModalActive] = useState(null);
  const [trainerId, setTrainerId] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const swiperRef = useRef(null);
  function openModal(trainerId) {
    setTrainerId(trainerId);
    setIsModalActive(true);
  }

  function handleCookieModalClick() {
    setIsCookieModalActive(false);
    setIsRegModalActive(true);
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
      <RegModal isActive={isRegModalActive} setIsActive={setIsRegModalActive}>
        <RegModalContent
          activeSlide={activeModalSlide}
          setActiveSlide={setActiveModalSlide}
          goToSlide={goToSlide}
          swiperRef={swiperRef}
          setIsActive={setIsRegModalActive}
          setUserInfo={setUserInfo}
        />
      </RegModal>
      {isModalActive && (
        <Modal
          isActive={isModalActive}
          setIsActive={setIsModalActive}
          trainerId={trainerId}
        />
      )}
      {isCookieModalActive && (
        <CookieModal>
          <CookieModalContent onClick={handleCookieModalClick} />
        </CookieModal>
      )}
      <Header>
        <TrainersPageHeader
          setIsRegModalACtive={setIsRegModalActive}
          setActiveModalSlide={setActiveModalSlide}
          goToSlide={goToSlide}
          userInfo={userInfo}
        />
      </Header>
      <Main>
        <Hero />
        <TrainersList openModal={openModal} />
      </Main>
      <Footer />
    </>
  );
}
