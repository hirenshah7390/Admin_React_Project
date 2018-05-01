import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import {loadUsers} from './actions/userActions';
import {loadTitles} from "./actions/titleActions";
import {loadDegrees} from './actions/degreeActions';
import {loadPositions} from './actions/positionActions';
import {loadDepartments} from './actions/departmentsAction';
import {loadUnits} from "./actions/academicUnitsAction";
import {loadInstitutions} from "./actions/institutionAction";
import {loadOrsFunctions} from './actions/orsFunctionsAction';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReduxToastr from 'react-redux-toastr';

const store = configureStore();
store.dispatch(loadUsers());
store.dispatch(loadTitles());
store.dispatch(loadOrsFunctions());
store.dispatch(loadDegrees());
store.dispatch(loadPositions());
store.dispatch(loadDepartments());
store.dispatch(loadUnits());
store.dispatch(loadInstitutions());

render(
  <Provider store={store}>
    <div>
    <Router history={browserHistory} routes={routes} />
    <ReduxToastr
      timeOut={2000}
      newestOnTop={false}
      preventDuplicates
      position="top-left"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar/>
    </div>
  </Provider>,
   document.getElementById('app')
);
