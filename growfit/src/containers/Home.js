import { connect } from 'react-redux';
import HomePresenter from '../presenters/Home';
import getData from '../actions/index';

const mapStateToProps = () => {
  return {
  };
};


const mapdispatchToProps = (dispatch) => {
  return {
    onClick: (event) => {
      event.preventDefault();
      dispatch(getData());
    },
  };
};

const Home = connect(
  mapStateToProps,
  mapdispatchToProps,
)(HomePresenter);

export default Home;
