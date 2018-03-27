import { combineReducers } from 'redux';
import question from './Question';
import home from './home';

export default combineReducers({
  home,
  question,
});
