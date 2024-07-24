import { useEffect, useState, useCallback } from "react";
import Trainer from "../../../components/Trainer/Trainer";
import styles from "./TrainersList.module.css";
import axios from "axios";
import config from "../../../../config";

export default function TrainersList({ openModal }) {
  const [trainers, setTrainers] = useState([]);

  const fetchTrainers = async () => {
    try {
      const response = await axios.get(`${config.apiUrl}trainings/`, {
        withCredentials: true,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchTrainers();
      setTrainers(response);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {trainers?.map((item) => (
        <Trainer
          key={item.slug}
          name={item.name}
          description={item.description}
          img={item.photo}
          subject={item.training_subject}
          onClick={() => openModal(item.slug)}
        />
      ))}
    </div>
  );
}
