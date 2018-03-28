import React from 'react';

const Result = ({ correctlyAnsweredCount, wronglyAnsweredCount }) => (
  <div className="container" style={{ margin: '100px' }}>
    <h4> Test Result </h4>
    Number of  correctly answered questions are - {correctlyAnsweredCount}
    <br />
    Number of  wrongly answered questions are - {wronglyAnsweredCount}
  </div>
);

export default Result;
