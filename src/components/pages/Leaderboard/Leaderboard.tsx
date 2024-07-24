import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import LeaderboardHeader from "./sections/LeaderboardHeader/LeaderboardHeader";
import ListSection from "./sections/ListSection/ListSection";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Leaderboard() {
  const params = useParams().testSlug;
  const [userInfo, setUserInfo] = useState(null);
  const [leadersList, setLeadersList] = useState(null);
  const [testData, setTestData] = useState(null);

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

  async function fetchLeaders() {
    try {
      const response = await axios.get(
        `https://www.zubrilka.space/api/leader_board/${params}/`,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(
        `https://www.zubrilka.space/api/challenges/${params}/?play_mode=true`,
        {
          withCredentials: true,
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchUserData();
      if (response === undefined) {
        setUserInfo(false);
      } else {
        setUserInfo(response);
      }
    };

    const fetchLeaderBoard = async () => {
      const response = await fetchLeaders();
      setLeadersList(response);
    };

    const fetchDetails = async () => {
      const response = await fetchQuestions();
      setTestData(response);
    };

    fetchData();
    fetchLeaderBoard();
    fetchDetails();
  }, []);

  return (
    <>
      <Header>
        <LeaderboardHeader userInfo={userInfo} />
      </Header>
      <Main>
        <ListSection testData={testData} leadersList={leadersList} />
      </Main>
      <Footer />
    </>
  );
}
