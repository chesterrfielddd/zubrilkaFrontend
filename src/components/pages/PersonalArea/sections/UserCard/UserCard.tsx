import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./UserCard.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import hiddenEyeIcon from "../../../assets/icons/hide-regular-24.png";
import shownEyeIcon from "../../../assets/icons/show-alt-regular-24.png";
import axios from "axios";

export default function userCard() {
  const [phone, setPhone] = useState(null);
  const [name, setName] = useState(null);
  const [notifications, setNotifications] = useState(null);

  const [isDataLoaded, setIsDataLoaded] = useState(false);
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
      setIsDataLoaded(true);
      setPhone(response.phone);
      setName(response.username);
      setNotifications(response.notifications);
    };

    fetchData();
  }, []);

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }
  function handleNotificationsChange(event) {
    setNotifications(event.target.value);
  }

  const { register, handleSubmit } = useForm();
  async function onSubmit(data) {
    try {
      console.log(data);
      data["political"] = true;
      console.log(data);
      const response = await fetch(`https://www.zubrilka.space/api/users/me/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Data has been successfully sent");
      } else {
        console.error("Error:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.user_info}>
        <div className={styles.avatar_container}>
          <img src="" alt="" className={styles.avatar} />
        </div>
        {isDataLoaded ? (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.input_label_cont}>
              <label htmlFor="username">username</label>
              <div className={styles.input_container}>
                <input
                  {...register("username")}
                  type="text"
                  className={styles.input}
                  value={name}
                  onChange={handleNameChange}
                  id="username"
                />
              </div>
            </div>
            <div className={styles.input_label_cont}>
              <label htmlFor="phone">phone</label>
              <div className={styles.input_container}>
                <input
                  {...register("phone")}
                  type="tel"
                  className={styles.input}
                  value={phone}
                  onChange={handlePhoneChange}
                  id="phone"
                />
              </div>
            </div>
            <div className={styles.input_label_cont}>
              <label htmlFor="notifications">notifications</label>
              <div className={styles.input_container}>
                <input
                  {...register("notifications")}
                  type={"checkbox"}
                  className={styles.input_checkbox}
                  value={notifications}
                  onChange={handleNotificationsChange}
                  id="notifications"
                />
              </div>
            </div>
            <button type="submit" className={styles.button}>
              Сохранить
            </button>
          </form>
        ) : (
          <p>loading...</p>
        )}
      </div>

      {/* <div className={styles.trainers_wrapper}>
        <h2 className={styles.title}>Ваши успехи</h2>
        <Swiper>

        </Swiper>
      </div> */}
    </div>
  );
}
