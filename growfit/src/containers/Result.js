import { connect } from 'react-redux';
import ResultPresenter from '../presenters/Result';

const mapStateToProps = (state, ownProps) => {
  let correctlyAnsweredCount = state.question.correctlyAnsweredCount;
  let wronglyAnsweredCount = state.question.wronglyAnsweredCount

  return {
    correctlyAnsweredCount,
    wronglyAnsweredCount
  }
}


const mapdispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

const Result = connect(
  mapStateToProps,
  mapdispatchToProps
)(ResultPresenter);

export default Result;