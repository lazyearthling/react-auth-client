import React,{Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm,Field} from 'redux-form';

const renderInput = field =>
  <div>
    <label htmlFor={field.name}>{field.label}</label>
    <input {...field.input} type={field.type} className="form-control" />
  </div>

  class Signin extends Component {

    handleFormSubmit({email,password}){
      console.log(email,password);
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
          <button action="submit" className="btn btn-primary">Sign in</button>
        </form>
      );
    }

  }

  export default reduxForm({
    form: 'signin'
  })(Signin);
