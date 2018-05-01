import * as types from './actionTypes';
import fetch from 'node-fetch';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadPositionsSuccess(positions){
  return{type: types.LOAD_POSITIONS_SUCCESS, positions};
}

export function loadPositions() {  
    return function(dispatch){
      dispatch(beginAjaxCall());
      return fetch('http://localhost:5000/ors/positions')
      .then(response => {
        response.json()
        .then(positions => {                  
          dispatch(loadPositionsSuccess(positions.data));
      }).catch(error => {
        throw(error);
      });
    });
    };
  }