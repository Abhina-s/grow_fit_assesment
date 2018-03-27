import history from '../history';


//function to fetch the data from the API when the home page is rendered 
const getData = () => (dispatch, getState) =>
  fetch("https://s3-ap-southeast-1.amazonaws.com/grow-fit-stage/uploads/quizapp/quiz.json")
    .then(res => {
      return res.json();
    })
    .then(data => {
      dispatch({
        type: 'FETCH_TEST_DATA',
        payload: data
      })
      history.push('/question')
    });

export default getData;