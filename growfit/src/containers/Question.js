import { connect } from 'react-redux';
import QuestionPresenter from '../presenters/Question';
import history from '../history';

const mapStateToProps = (state) => {
  /* returns the list of questions, the property index which represents the question being
  rendered and the property next, which is the next question to be rendered */
  const testData = state.home.testData;
  const data = [];
  const questionList = [];
  data.push(Object.values(testData));
  data.map(value => questionList.push(value));
  const index = state.question.id;
  const next = state.question.data;
  return {
    questionList,
    index,
    next,
  };
};

const mapdispatchToProps = (dispatch) => {
  let count = 0;
  return {
    onOptionClick: (event, id, answerId, index, next) => {
      event.preventDefault();
      if (id === answerId) {
        dispatch({
          type: 'CORRECT_ANSWER',
          payload: true,
        });
      }
      else {
        dispatch({
          type: 'WRONG_ANSWER',
          payload: true,
        });
      }
      if (index + 1 === 10) {
        history.push('/result');
      }
      dispatch({
        type: 'NEXT_QUESTION',
        payload: next,
        id: count += 1,
      });
    },

    skip: (next, index) => {
      dispatch({
        type: 'SKIP_QUESTION',
        payload: true,
      });
      dispatch({
        type: 'NEXT_QUESTION',
        payload: next,
        id: count += 1,
      });
      if (index + 1 === 10) {
        history.push('/result');
      }
    },
  };
};


const Question = connect(
  mapStateToProps,
  mapdispatchToProps,
)(QuestionPresenter);

export default Question;
