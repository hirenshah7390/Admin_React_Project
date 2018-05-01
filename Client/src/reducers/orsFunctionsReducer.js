import * as types from '../actions/actionTypes';
import  initialState from './initialState';

export default function orsFunctionsReducer(state= initialState.orsFunctions, action){
  switch(action.type){
    case types.LOAD_ORSFUNCTIONS_SUCCESS:
      return action.orsFunctions;

    default:
      return state;
  }
}
