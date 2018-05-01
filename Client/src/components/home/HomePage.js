import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render() {
      return(
         <div className="jumbotron">
           <h3>ORS</h3>
           <p>List...</p>
           <Link to="about" className="btn btn-primary btn-sm">Add New</Link>
         </div>
      );
  }
}

export default HomePage;
