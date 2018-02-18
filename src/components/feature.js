import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Feature extends Component{
  componentWillMount(){
    this.props.fetchMessage();
  }
  render(){
    return(
      <div>
        <h2 style={{textAlign:"center"}}>
          {this.props.message}
        </h2>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {message:state.auth.message}
}

export default connect(mapStateToProps,actions)(Feature);
