import * as types from './actionTypes';
import fetch from 'node-fetch';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadDepartmentsSuccess(departments){
  return{type: types.LOAD_DEPARTMENTS_SUCCESS, departments};
}

export function loadDepartments(){  
    return function(dispatch){
      dispatch(beginAjaxCall());
      return fetch('http://localhost:5000/ors/departments')
      .then(response => {
        response.json()
        .then(departments => {                         
          dispatch(loadDepartmentsSuccess(departments.data));
      }).catch(error => {
        throw(error);
      });
    });
    };
  }