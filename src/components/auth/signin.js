import React,{Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm,Field} from 'redux-form';
import * as actions from '../../actions';

const renderInput = field =>
  <div>
    <label htmlFor={field.name}>{field.label}</label>
    <input {...field.input} type={field.type} className="form-control" />
  </div>

  class Signin extends Component {

    handleFormSubmit({email,password}){
      this.props.signInUser({email,password});
    }

    renderAlert(){
      if(this.props.errorMessage){
        return(
          <div className="alert alert-danger">
            <strong>Oops! </strong> {this.props.errorMessage}
          </div>
        );
      }
    }

    render(){

      const {handleSubmit} = this.props;

      return(
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="form-group">
            <Field
              name="email"
              label="Email:"
              component={renderInput}
              type="text"
            />
          </div>
          <div className="form-group">
            <Field
              name="password"
              label="Password:"
              component={renderInput}
              type="password"
            />
          </div>
          {this.renderAlert()}
          <button action="submit" className="btn btn-primary">Sign in</button>
        </form>
      );
    }

  }

  function mapStateToProps(state){
    return {errorMessage: state.auth.error};
  }

  export default reduxForm({
    form: 'signin'
  })(connect(mapStateToProps,actions)(Signin));
