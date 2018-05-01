import * as types from './actionTypes';
import fetch from 'node-fetch';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadInstitutionsSuccess(institutions){
  return{type: types.LOAD_INSTITUTIONS_SUCCESS, institutions};
}

export function loadInstitutions() { 
    return function(dispatch){
      dispatch(beginAjaxCall());
      return fetch('http://localhost:5000/ors/institutions')
      .then(response => {
        response.json()
        .then(institutions => {                  
          dispatch(loadInstitutionsSuccess(institutions.data));
      }).catch(error => {
        throw(error);
      });
    });
    };
  }