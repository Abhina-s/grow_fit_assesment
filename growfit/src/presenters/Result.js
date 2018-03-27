import React from 'react';

const Result = ({ correctAnsweredCount, wrongAnsweredCount }) => (
  <div className="container">
    <h4> Test Result </h4>
    Number of  correctly answered questions are - {correctAnsweredCount}
    <br />
    Number of  wrongly answered questions are - {wrongAnsweredCount}
  </div>
);

export default Result;