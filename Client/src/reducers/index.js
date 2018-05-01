import {combineReducers} from  'redux';
import users from './userReducer';
import titles from './titleReducer';
import degrees from './degreeReducer';
import positions from './positionReducer';
import departments from './departmentReducer';
import units from './academicUnitReducer';
import institutions from './institutionReducer';
import orsFunctions from './orsFunctionsReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import {reducer as toastrReducer} from 'react-redux-toastr';

const rootReducer = combineReducers({
  users,
  titles,
  orsFunctions,
  degrees,
  positions,
  departments,
  units,
  institutions,
  ajaxCallsInProgress,
  toastr: toastrReducer
});

export default rootReducer;
