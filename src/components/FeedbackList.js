import { React, useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet.</p>;
  }
  console.log(feedback.length);
  return (
    <div className="feedback-list">
      {feedback.map((item, idx) => {
        return <FeedbackItem key={idx} item={item}></FeedbackItem>;
      })}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedbackList;
