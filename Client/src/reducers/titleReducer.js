import * as types from '../actions/actionTypes';
import  initialState from './initialState';

export default function titleReducer(state= initialState.titles, action){
  switch(action.type){
    case types.LOAD_TITLES_SUCCESS:
      return action.titles;

    default:
      return state;
  }
}
