import React,{Component} from 'react';
import {connect} from 'react-redux';

export default function(ComposedComponent){
  class Authentication extends Component{
    render(){
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state){
    console.log(state.auth)
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
