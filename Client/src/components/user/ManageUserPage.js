import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import UserForm from './UserForm';

class ManageUserPage extends React.Component {
  constructor(props, context) {    
    super(props, context);
   
    let user = Object.assign({}, this.props.user);
    let orsFunctions = Object.assign([], this.props.orsFunctions);
    let user_functions = user.user_functions; 

    if(user_functions)
    {
      orsFunctions = this.setORSFunctions(orsFunctions, user_functions);    
    }

    this.state = {
      user: user,
      orsFunctions: orsFunctions,
      errors: {}
    };
    
    this.updateUserState = this.updateUserState.bind(this);
    this.saveUser = this.saveUser.bind(this);  
  }
 
  componentWillReceiveProps(nextProps){
    //necessary to populate form when existing user id loaded directly
    if(this.props.user.user_ID !== nextProps.user.user_ID){    
      this.setState({user: Object.assign({}, nextProps.user)});      
    }

    if(this.props.orsFunctions !== undefined && this.props.orsFunctions.length > 0){     
      let orsFunctions = Object.assign([], nextProps.orsFunctions);
      let user_functions = this.state.user.user_functions;       
      if(user_functions)
      {
        orsFunctions = this.setORSFunctions(orsFunctions,user_functions);
      }     
      this.setState({orsFunctions: orsFunctions}); 
    }    
  }

  setORSFunctions(orsFunctions, user_functions)
  {
    orsFunctions = orsFunctions.map(f => {      
      if(user_functions.some(item => item.ors_function_ID === f.value))
         return {
           value: f.value,
           label: f.label,
           checked: 1
         };
      else
        return f;
       });

    return orsFunctions;
  }

  updateUserState(event) {    
    const field = event.target.name;
    let user = Object.assign({}, this.state.user); //maintain immutability
    let orsFunctions = Object.assign([],this.state.orsFunctions); 
    
    //update function checkBox list
    if(field == 'orsFunctionsList')
    {
      orsFunctions = orsFunctions.map(f => {
        if(f.value === parseInt(event.target.value))
           return {
             value: f.value,
             label: f.label,
             checked: ((event.target.checked) ? 1 : 0)
           };
        else
          return f;
      });

      let userFunctions = orsFunctions.filter(fn => fn.checked);      
      user['functions'] = Array.prototype.map.call(userFunctions,s => s.label).toString(); //a,b,c
     
    } 
    else    
      user[field] = event.target.type === 'checkbox' ? ((event.target.checked) ? 1 : 0) : event.target.value;        
     
    this.setState({orsFunctions: orsFunctions});
    return this.setState({user: user});

  }

  userFormIsValid() {
    let formIsValid = true;
    let errors = {};
    this.setState({errors: errors});

     if(!this.state.user.first_name.length){
        errors.first_name = 'First name is required.';
       formIsValid = false;
     }

    if(!this.state.user.last_name.length){
      errors.last_name = 'Last name is required.';
      formIsValid = false;
    }

    if(!this.state.user.email.length){
      errors.email = 'Email is required.';
      formIsValid = false;
    }
    else if(!this.state.user.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
    {
      errors.email = 'Email is not valid.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveUser(event){   
    event.preventDefault();
    if(!this.userFormIsValid()){
      return;
    }  
    let user = Object.assign({}, this.state.user);    
    let user_functions = user.user_functions; 
    let orsFunctions = Object.assign([], this.state.orsFunctions);   
    let userFunctions = []; 
    
    orsFunctions.forEach(f => {      
      if((user_functions === null || user_functions == undefined || !user_functions.some(item => item.ors_function_ID === f.value)) && f.checked)         
      userFunctions.push({
          "user_function_ID": 0,
          "user_ID": user.user_ID,
          "ors_function_ID": f.value          
         }); 
      else if((user_functions === null || user_functions == undefined || user_functions.some(item => item.ors_function_ID === f.value)) && !f.checked)
      {
        let uf = user_functions.filter(uf => uf.ors_function_ID == f.value);
        user_functions = user_functions.filter(uf => uf.ors_function_ID !== f.value);        
        userFunctions.push({
          "user_function_ID": uf[0].user_function_ID,
          "user_ID": user.user_ID,
          "ors_function_ID": -1         
         });  
      }
    });  
   
    user['user_functions'] = user_functions.concat(userFunctions);          
    user["SSO"] = (user.SSO === "" || user.SSO === undefined) ? 0 : user.SSO;         
    this.props.userActions.saveUser(user)
        .then(() => this.redirect());
  }

  redirect() {
    this.context.router.push('/users');    
  }

  render() {   
    return (
      <UserForm
        allTitles={this.props.titles}
        allDegrees = {this.props.degrees}
        allPositions = {this.props.positions}
        allDepartments = {this.props.departments}
        allUnits= {this.props.units}
        allInstitutions= {this.props.institutions}
        orsFunctions={this.state.orsFunctions}        
        onChange={this.updateUserState}
        onSave = {this.saveUser}
        user={this.state.user}        
        errors={this.state.errors}
      />
    );
  }
}

ManageUserPage.propTypes = {
  user: PropTypes.object.isRequired,
  titles: PropTypes.array.isRequired,
  orsFunctions: PropTypes.array.isRequired,
  userActions: PropTypes.object.isRequired,
  degrees: PropTypes.array.isRequired,
  positions: PropTypes.array.isRequired,
  departments: PropTypes.array.isRequired,
  units: PropTypes.array.isRequired,
  institutions: PropTypes.array.isRequired,
};

 ManageUserPage.contextTypes = {
   router: PropTypes.object
 };

 function getUserById(users, userId) {  
   const user = users.filter(user => user.user_ID === userId);
   if(user.length) return user[0];
   return null;
 }

function mapStateToProps(state, ownProps) {
  const userId = ownProps.params.user_ID; //from the path '/user/:userId
  let user = 
   {
     user_ID: 0, 
     first_name: '',
     last_name:'',
     email: '', 
     dob: null,
     sex: 0,
     SSO: 0, 
     degree_ID: 1000,
     title_ID: 1000, 
     position_ID:1000,
     department_ID: 1000,
     institution_ID: 1000,
     au_ID: 1000,
     functions: '', 
     user_functions: []
    };

 if(userId && state.users.length > 0){
    user = getUserById(state.users, parseInt(userId)); //comes as string from url so parsing. We can use regex in react-router v4 in future
     }

  const titleFormattedForDropdown = state.titles.map(title => {
    return {
      value: title.titleId,
      text: title.name
    };
  });
  
  const degrees = state.degrees.filter(f => f.degree_name != '');
  const degreeFormattedForDropdown = degrees.map(degree => {
      return {
        value: degree.degree_ID,
        text: degree.degree_name
      }; 
  });  
  
  const positions = state.positions.filter(f => f.position_name != '');
  const positionFormattedForDropdown = positions.map(position => {
      return {
        value: position.position_ID,
        text: position.position_name
      }; 
  });

  const departments = state.departments.filter(f => f.department_name != '');
  const departmentFormattedForDropdown = departments.map(department => {
      return {
        value: department.department_ID,
        text: department.department_name
      }; 
  });

  const units = state.units.filter(f => f.au_name != '');
  const unitFormattedForDropdown = units.map(unit => {
      return {
        value: unit.au_ID,
        text: unit.au_name
      }; 
  });

  const institutions = state.institutions.filter(f => f.institution_name != '');
  const institutionFormattedForDropdown = institutions.map(institution => {
      return {
        value: institution.institution_ID,
        text: institution.institution_name
      }; 
  });



  const orsFunctioncheckboxList = state.orsFunctions.map(orsFunction =>{
    return {
       value: orsFunction.ors_function_ID,
       label: orsFunction.ors_function,
       checked: 0
    };
  });

  return {
    user: user,
    titles: titleFormattedForDropdown,
    orsFunctions: orsFunctioncheckboxList,
    degrees: degreeFormattedForDropdown,
    positions: positionFormattedForDropdown,
    departments: departmentFormattedForDropdown,
    units: unitFormattedForDropdown,
    institutions: institutionFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUserPage);

