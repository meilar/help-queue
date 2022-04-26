import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props){
    return (
      <React.Fragment>
        <form onSubmit={props.formSubmissionHandler}>
          <input
            className="form-control tixForm"
            type="text"
            name="names"
            placeholder='Pair Names' />
          <input
            className="form-control tixForm"
            type='text'
            name='location'
            placeholder='Location' />
          <textarea
            className="form-control tixForm"
            name='issue'
            placeholder='Describe your issue.' />
          <button className="btn btn-primary tixForm" type='submit'>{props.buttonText}</button>
        </form>
      </React.Fragment>
  );
}

ReusableForm.propTypes = {

  buttonText: PropTypes.string,
  formSubmissionHandler: PropTypes.func
};

export default ReusableForm;