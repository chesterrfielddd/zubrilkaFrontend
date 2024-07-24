import Header from "../../components/Header/Header";
import TestSection from "./sections/TestSection/TestSection";
import TestPageHeader from "./sections/TestPageHeader/TestPageHeader";
import CustomMain from "./sections/CustomMain/CustomMain";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function TestPage() {
  const params = useParams().testSlug;
  const [testData, setTestData] = useState(null);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

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
      const response = await fetchQuestions();
      setTestData(response);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header>
        <TestPageHeader
          testData={testData}
          //  minutes={minutes} seconds={seconds}
          isTimerRunning={isTimerRunning}
        />
      </Header>
      <CustomMain>
        <TestSection testData={testData} setIsTimerRunning={setIsTimerRunning} params={params} />
      </CustomMain>
    </>
  );
}
