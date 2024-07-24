import { useRef, useState } from "react";
import classes from "./FaqSection.module.css";

function FaqButton({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef();

  function handleFaqClick() {
    setIsOpen(isOpen ? false : true);
  }

  return (
    <div className={classes.faq__content}>
      <div className={classes.faq__question} onClick={handleFaqClick}>
        <p>{question}</p>
        <span>+</span>
      </div>
      <div
        className={classes.faq__answer}
        ref={answerRef}
        style={
          isOpen
            ? { maxHeight: `${answerRef.current.scrollHeight}px` }
            : { maxHeight: "0px" }
        }
      >
        {answer}
      </div>
    </div>
  );
}

export default function FaqSection({ id }) {
  return (
    <div className={classes.faq} id={id}>
      <div className={classes.faq__container}>
        <div className={classes.title_cont}>
          <div className={classes.faq__title}>FAQ</div>
        </div>
        <div className={classes.faq__contentCont}>
          <FaqButton
            question="Это курсы?"
            answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            eius ab facilis excepturi perspiciatis cumque consectetur nostrum
            facere esse quod voluptatum veritatis magnam expedita, aliquid
            quisquam pariatur eveniet assumenda odit!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            eius ab facilis excepturi perspiciatis cumque consectetur nostrum
            facere esse quod voluptatum veritatis magnam expedita, aliquid
            quisquam pariatur eveniet assumenda odit!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            eius ab facilis excepturi perspiciatis cumque consectetur nostrum
            facere esse quod voluptatum veritatis magnam expedita, aliquid
            quisquam pariatur eveniet assumenda odit!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            eius ab facilis excepturi perspiciatis cumque consectetur nostrum
            facere esse quod voluptatum veritatis magnam expedita, aliquid
            quisquam pariatur eveniet assumenda odit!"
          ></FaqButton>
          <FaqButton
            question="Бесплатна ли платформа?"
            answer="
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            eius ab facilis excepturi perspiciatis cumque consectetur nostrum
            facere esse quod voluptatum veritatis magnam expedita, aliquid
            quisquam pariatur eveniet assumenda odit!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            eius ab facilis excepturi perspiciatis cumque consectetur nostrum
            facere esse quod voluptatum veritatis magnam expedita, aliquid
            quisquam pariatur eveniet assumenda odit!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            eius ab facilis excepturi perspiciatis cumque consectetur nostrum
            facere esse quod voluptatum veritatis magnam expedita, aliquid
            quisquam pariatur eveniet assumenda odit!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            eius ab facilis excepturi perspiciatis cumque consectetur nostrum
            facere esse quod voluptatum veritatis magnam expedita, aliquid
            quisquam pariatur eveniet assumenda odit!
          "
          ></FaqButton>
          <FaqButton
            question="Zubrilka рассчитана на школьников?"
            answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          ullam explicabo molestias illo nihil ipsam aliquam incidunt eius
          asperiores? Laborum. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Accusamus ullam explicabo molestias illo nihil ipsam aliquam
          incidunt eius asperiores? Laborum."
          ></FaqButton>
          <FaqButton
            question="Чем Zubrilka мне поможет?"
            answer="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          ullam explicabo molestias illo nihil ipsam aliquam incidunt eius
          asperiores? Laborum. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Accusamus ullam explicabo molestias illo nihil ipsam aliquam
          incidunt eius asperiores? Laborum."
          ></FaqButton>
        </div>
      </div>
    </div>
  );
}
