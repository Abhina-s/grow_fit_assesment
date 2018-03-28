import { connect } from 'react-redux';
import ResultPresenter from '../presenters/Result';

const mapStateToProps = (state) => {
  const correctlyAnsweredCount = state.question.correctlyAnsweredCount;
  const wronglyAnsweredCount = state.question.wronglyAnsweredCount;

  return {
    correctlyAnsweredCount,
    wronglyAnsweredCount,
  };
};


const mapdispatchToProps = () => {
  return {

  };
};

const Result = connect(
  mapStateToProps,
  mapdispatchToProps,
)(ResultPresenter);

export default Result;
