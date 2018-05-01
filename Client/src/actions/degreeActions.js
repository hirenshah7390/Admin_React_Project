import * as types from './actionTypes';
import fetch from 'node-fetch';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadDegreesSuccess(degrees){
  return{type: types.LOAD_DEGREES_SUCCESS, degrees};
}

export function loadDegrees() {  
    return function(dispatch){
      dispatch(beginAjaxCall());
      return fetch('http://localhost:5000/ors/degrees')
      .then(response => {
        response.json()
        .then(degrees => {                  
          dispatch(loadDegreesSuccess(degrees.data));
      }).catch(error => {
        throw(error);
      });
    });
    };
  }