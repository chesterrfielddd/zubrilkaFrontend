import { FC } from "react";
import styled from "./Challenge.module.css";

interface ChallengeComponentProps {
  name: string;
  description: string;
  image: string;
}

const Challenge: FC<ChallengeComponentProps> = ({
  name,
  description,
  image,
  ...props
}) => {
  return (
    <div className={styled.challenge} {...props}>
      <div className={styled.imgCont}>
        <img src={image} alt="" className={styled.img} />
      </div>
      <div className={styled.textCont}>
        <h3 className={styled.name}>{name}</h3>
        <p className={styled.text}>{description}</p>
      </div>
    </div>
  );
};

export default Challenge;
