import {SET_STAR_LIST,GET_STAR_LIST} from './actions';
import {combineReducers} from 'redux';

const initialStarList = {
  list : []
}

const lister = (state = initialStarList, action) => {
  switch (action.type) {
    case SET_STAR_LIST:
      return Object.assign({},state,{
        list : action.list
      });
    case GET_STAR_LIST:
      return state.list;
    default :
      return state;
  }
};

const extra = (state = { list: 'this_is_extra_reducer' }, action) => {
  switch (action.type) {
    default: return state;
  }
}

const listApp = combineReducers({
    lister,
    extra
});
export default listApp;