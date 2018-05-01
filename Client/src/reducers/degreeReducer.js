import * as types from '../actions/actionTypes';
import  initialState from './initialState';

export default function degreeReducer(state= initialState.degrees, action){
    switch(action.type){
      case types.LOAD_DEGREES_SUCCESS:
        return action.degrees;
  
      default:
        return state;
    }
  }