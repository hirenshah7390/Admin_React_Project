import * as types from '../actions/actionTypes';
import  initialState from './initialState';

export default function positionsReducer(state= initialState.positions, action){
    switch(action.type){
      case types.LOAD_POSITIONS_SUCCESS:
        return action.positions;
  
      default:
        return state;
    }
  }