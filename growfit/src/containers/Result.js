import { connect } from 'react-redux';
import ResultPresenter from '../presenters/Result';

const mapStateToProps = (state, ownProps) => {
  let correctAnsweredCount = state.question.correctAnsweredCount;
  let wrongAnsweredCount = state.question.wrongAnsweredCount

  return {
    correctAnsweredCount,
    wrongAnsweredCount
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