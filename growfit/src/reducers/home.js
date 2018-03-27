const defaultState = {
  isFetched: false,
  testData: undefined
}

const home = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_TEST_DATA":
      return Object.assign({}, state, {
        testData: action.payload,
        isFetched: true
      });

    default:
      return state;
  }
}

export default home;
