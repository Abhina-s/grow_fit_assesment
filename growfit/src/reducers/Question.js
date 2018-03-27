const defaultState = {
  isAnsweredCorrectly: false,
  isSkipped: false,
  isAnsweredWrongly: false,
  correctAnsweredCount: 0,
  wrongAnsweredCount: 0,
  data: undefined,
  id: 0
}

const question = (state = defaultState, action) => {
  ;
  switch (action.type) {

    case "NEXT_QUESTION":
      return Object.assign({}, state, {
        data: action.payload,
        id: action.id
      });

    case "ANSWER_QUESTION":
      return Object.assign({}, state, {
        isAnswered: action.payload,
        correctAnsweredCount: state.correctAnsweredCount + 1
      });

    case "WRONG_QUESTION":
      return Object.assign({}, state, {
        isAnsweredWrongly: action.payload,
        wrongAnsweredCount: state.wrongAnsweredCount + 1
      });

    case "SKIP_QUESTION":
      return Object.assign({}, state, {
        isSkipped: action.payload,
        wrongAnsweredCount: state.wrongAnsweredCount + 1
      });

    default:
      return state;
  }
}

export default question;
