import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import {Checkbox} from 'react-bootstrap';
import CheckboxList from '../common/Chkboxlist';

const UserForm = ({user, allTitles, allPositions, allDepartments, allUnits, allInstitutions, orsFunctions,allDegrees, onSave, onChange, loading, errors}) => {
  let genders = []; 
  genders.push({ value : 1, text : 'M'});
  genders.push({ value : 2, text : 'F'});
 
  return (
    <form>
      <h3>Manage User</h3>
      <div className="jumbotron">
        <TextInput
          name={"first_name"}
          label={"First Name"}
          type={"text"}
          value={user.first_name}
          onChange={onChange}
          error={errors.first_name}/>

        <TextInput
          name={"last_name"}
          label={"Last Name"}
          type={"text"}
          value={user.last_name}
          onChange={onChange}
          error={errors.last_name}/>

        <TextInput
          name={"email"}
          label={"Email"}
          type={"text"}
          value={user.email}
          onChange={onChange}
          error={errors.email}/>
         
         {/*<TextInput
          name={"dob"}
          label={"Date of Birth"}
          type={"date"}
          value={user.dob}
          onChange={onChange}
         error={errors.dob}/>   */} 

        <Checkbox
          name="SSO"
          className={"form-check"}
          value={user.SSO}
          checked={user.SSO}
          onChange={onChange}>SSO
        </Checkbox>

        <SelectInput
          name={"title_ID"}
          label={"Title"}
          value={parseInt(user.title_ID)}
          defaultOption={"Select Title"}
          options={allTitles}
          onChange={onChange} error={errors.title_ID}
        />

        <SelectInput
          name={"sex"}
          label={"Gender"}
          value={parseInt(user.sex)}
          defaultOption={"Select Gender"}
          options={genders}
          onChange={onChange} error={errors.sex}
        />

        <SelectInput
          name={"degree_ID"}
          label={"Degree"}
          value={parseInt(user.degree_ID)}
          defaultOption={"Select Degree"}
          options={allDegrees}
          onChange={onChange} error={errors.degree_ID}
        />

        <SelectInput
          name={"position_ID"}
          label={"Position"}
          value={parseInt(user.position_ID)}
          defaultOption={"Select Position"}
          options={allPositions}
          onChange={onChange} error={errors.position_ID}
        />

         <SelectInput
          name={"department_ID"}
          label={"Department"}
          value={parseInt(user.department_ID)}
          defaultOption={"Select Department"}
          options={allDepartments}
          onChange={onChange} error={errors.department_ID}
        />

        <SelectInput
          name={"au_ID"}
          label={"Academic Unit"}
          value={parseInt(user.au_ID)}
          defaultOption={"Select Academic Unit"}
          options={allUnits}
          onChange={onChange} error={errors.au_ID}
        />

         <SelectInput
          name={"institution_ID"}
          label={"Institution"}
          value={parseInt(user.institution_ID)}
          defaultOption={"Select Institution"}
          options={allInstitutions}
          onChange={onChange} error={errors.institution_ID}
        />

        <CheckboxList
          name={'orsFunctionsList'}
          label={'Functions'}
          onChange={onChange}
          values={orsFunctions}
        />

        <input
          type={"submit"}
          disabled={loading}
          value={loading ? 'Saving...' : 'Save'}
          className={"btn btn-primary"}
          onClick={onSave}/>
      </div>
    </form>
  );
};


UserForm.propTypes = {
  user: React.PropTypes.object.isRequired,
  allTitles: React.PropTypes.array,
  orsFunctions: React.PropTypes.array.isRequired,
  allDegrees: React.PropTypes.array,
  allPositions: React.PropTypes.array,
  allDepartments: React.PropTypes.array,
  allUnits: React.PropTypes.array,
  allInstitutions: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,  
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default UserForm;
