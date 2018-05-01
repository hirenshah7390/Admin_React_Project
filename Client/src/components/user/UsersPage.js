import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../actions/userActions';
import {bindActionCreators} from 'redux';
import UserList from './UserList';
import {browserHistory} from 'react-router';

class UsersPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddUserPage = this.redirectToAddUserPage.bind(this);
  }

  redirectToAddUserPage() {
    browserHistory.push('/user');
  }

  render() {
    const {users} = this.props;
    return (
      <div>
        <div className="form-group">
          <h3>Users</h3>
          <input type={"submit"}
                 value={"Add User"}
                 className={"btn btn-primary"}
                 onClick={this.redirectToAddUserPage}/>
        </div>
        <UserList users={users}/>
      </div>
    );
  }
}

//PropTypes validation
UsersPage.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// Redux  connect and related functions
function mapStateToProps(state, ownProps) {
  return {
    users: state.users //pointing to users in root reducer // state is state inside store
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
