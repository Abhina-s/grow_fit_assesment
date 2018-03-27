import { connect } from 'react-redux';
import QuestionPresenter from '../presenters/Question';
import history from '../history';

const mapStateToProps = (state, ownProps) => {
  const testData = state.home.testData;
  let data = [];
  let index = [];
  let res = []
  data.push(Object.values(testData))
  index.push(Object.keys(testData))
  data.map(value => res.push(value))
  let i = state.question.id;
  let next = state.question.data;
  return {
    res,
    index: index.map(value => value),
    i,
    next
  }
}

const mapdispatchToProps = (dispatch, ownProps) => {
  let count = 0
  return {
    onOptionClick: (event, id, answerId, i, next) => {
      event.preventDefault();
      if (id === answerId) {
        dispatch({
          type: 'ANSWER_QUESTION',
          payload: true
        })
      }
      else {
        dispatch({
          type: 'WRONG_QUESTION',
          payload: true
        })
      }
      if (i + 1 === 10) {
        history.push('/result');
      }
      dispatch({
        type: 'NEXT_QUESTION',
        payload: next,
        id: count += 1
      })
    },
    skip: (next, i) => {
      dispatch({
        type: 'SKIP_QUESTION',
        payload: true,
      })
      dispatch({
        type: 'NEXT_QUESTION',
        payload: next,
        id: count += 1
      })
      if (i + 1 === 10) {
        history.push('/result');
      }
    }
  }
}


const Question = connect(
  mapStateToProps,
  mapdispatchToProps
)(QuestionPresenter);

export default Question;