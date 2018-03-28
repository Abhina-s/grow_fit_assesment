const defaultState = {
  isAnsweredCorrectly: false,
  isSkipped: false,
  isAnsweredWrongly: false,
  correctlyAnsweredCount: 0,
  wronglyAnsweredCount: 0,
  data: undefined,
  id: 0,
};

const question = (state = defaultState, action) => {
  switch (action.type) {
  case 'NEXT_QUESTION':
    // updates the question state with the next question to be rendered
    return Object.assign({}, state, {
      data: action.payload,
      id: action.id,
    });

  case 'CORRECT_ANSWER':
    // updates the state when a question is answered correctly
    return Object.assign({}, state, {
      isAnswered: action.payload,
      correctlyAnsweredCount: state.correctlyAnsweredCount + 1,
    });

  case 'WRONG_ANSWER':
    // updates the state when a question is wrongly answered
    return Object.assign({}, state, {
      isAnsweredWrongly: action.payload,
      wronglyAnsweredCount: state.wronglyAnsweredCount + 1,
    });

  case 'SKIP_QUESTION':
    // updates the state when a question is skipped
    return Object.assign({}, state, {
      isSkipped: action.payload,
      wronglyAnsweredCount: state.wronglyAnsweredCount + 1,
    });

  default:
    return state;
  }
};

export default question;
