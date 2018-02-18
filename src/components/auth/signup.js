import React,{Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm,Field} from 'redux-form';
import * as actions from '../../actions';

const renderInput = ({input,type,name,label,meta:{touched,error}}) =>
  <div>
    <label htmlFor={name}>{label}</label>
    <input {...input} type={type} className="form-control" />
    {touched && error && <span style={{color:"red"}}>{error}</span>}
  </div>

  class Signup extends Component{

    handleFormSubmit(formProps){
      this.props.signUpUser(formProps);
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
      const {handleSubmit}=this.props;

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
          <div className="form-group">
            <Field
              name="passwordConfirm"
              label="Confirm password:"
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

  function validate({email,password,passwordConfirm}){
    const errors = {};
    if(password !== passwordConfirm){
      errors.password = "Passwords must match"
    }
    if(!email){
      errors.email = "Please enter an email"
    }
    if(!password){
      errors.password = "Please enter a password"
    }
    if(!passwordConfirm){
      errors.passwordConfirm = "Please enter password confirmation"
    }

    return errors;
  }

  function mapStateToProps(state){
    return {errorMessage: state.auth.error};
  }

  export default reduxForm({
    form: 'signup',
    validate
  })(connect(mapStateToProps,actions)(Signup));
