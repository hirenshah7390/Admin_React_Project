import * as types from './actionTypes';
import axios from 'axios';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadOrsFunctionSuccess(orsFunctions){
  return {type: types.LOAD_ORSFUNCTIONS_SUCCESS, orsFunctions};
}

export function loadOrsFunctions() {  
  return function(dispatch){
    dispatch(beginAjaxCall());
    return axios.get('http://localhost:5000/ors/orsfunctions')
      .then(orsFunctions => {        
        dispatch(loadOrsFunctionSuccess(orsFunctions.data.recordset));
      }).catch(error => {
        throw(error);
      });
  };
}
