import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import ReactTable from "react-table";
import "react-table/react-table.css";

const UserList = ({users}) => {
  return (
    <ReactTable
      data={users}
      columns={[
        {
          Header: "User Id",
          accessor: "user_ID",
          show: false
        },
        {
          Header: "Last Name",
          accessor: "last_name",
          Cell: cellInfo => (<Link to={'/user/' + cellInfo.row.user_ID}>{cellInfo.row.last_name}</Link>) // Custom cell components!
        },
        {
          Header: "First Name",
          accessor: "first_name",
          Cell: cellInfo => (<Link to={'/user/' + cellInfo.row.user_ID}>{cellInfo.row.first_name}</Link>) // Custom cell components!
        },
        {
          Header: "Email",
          accessor: "email"
        },
        {
          Header: "SSO",
          accessor: "SSO"
        },
        {
          Header: "Functions",
          accessor: "functions"
        }
      ]}
      defaultSorted={[
        {
          id: "last_name",
          desc: false
        },
        {
          id: "first_name",
          desc: false
        }
      ]}
      defaultPageSize={20}
      className="-striped -highlight"
    />
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
