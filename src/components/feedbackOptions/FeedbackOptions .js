import React from "react";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((item) => {
    return (
      <button key={item} name={item} type="button" onClick={onLeaveFeedback}>
        {item}
      </button>
    );
  });
};

export default FeedbackOptions;
