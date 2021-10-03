import React from "react";
import PropType from "prop-types";
import ExplainCard from "./ExplainCard";
import QuizList from "../Page3/hangeul-quiz.json";
import "./Explanation.css";

const Explanation = ({ componentId }) => {
  return (
    <div
      className="explanation-outer-container horizontal-scroll-wrapper"
      id={componentId}
    >
      {QuizList.map((item, _) => {
        return (
          <ExplainCard
            quizItem={{
              id: item.id,
              question: item.question,
              explanation: item.explanation,
            }}
          />
        );
      })}
    </div>
  );
};

Explanation.propTypes = {
  componentId: PropType.number.isRequired,
};

export default Explanation;
