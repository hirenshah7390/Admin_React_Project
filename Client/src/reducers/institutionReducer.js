import * as types from '../actions/actionTypes';
import  initialState from './initialState';

export default function institutionReducer(state= initialState.institutions, action){  
    switch(action.type){
      case types.LOAD_INSTITUTIONS_SUCCESS:
        return action.institutions;
  
      default:
        return state;
    }
  }