import { connect } from 'react-redux';
import HomePresenter from '../presenters/Home';
import getData from '../actions/index';

const mapStateToProps = (state, ownProps) => {
  return {
  }
}


const mapdispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (event) => {
      event.preventDefault();
      dispatch(getData());
    }
  }
}

const Home = connect(
  mapStateToProps,
  mapdispatchToProps
)(HomePresenter);

export default Home;