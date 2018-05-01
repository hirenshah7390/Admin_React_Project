import * as types from './actionTypes';
import axios from 'axios';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadTitlesSuccess(titles){
  return {type: types.LOAD_TITLES_SUCCESS, titles};
}

export function loadTitles() { 
  return function(dispatch){
    dispatch(beginAjaxCall());
    return axios.get('http://localhost:5000/ors/titles')
      .then(titles => {
      dispatch(loadTitlesSuccess(titles.data.recordset));
    }).catch(error => {
      throw(error);
    });
  };
}
