import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return(

      <nav className="navbar navbar-light" style={{"backgroundColor": "#e3f2fd"}}>
        <Link to ='/' className="navbar-brand">Brand Name</Link>
        <ul className="nav justify-content-end">
          <li className="nav-item"><Link to="/signin"  className="nav-link">Sign In</Link></li>
          <li className="nav-item"><Link to="/signup"  className="nav-link">Sign Up</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
