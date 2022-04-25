import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

class NewTicketForm extends React.Component{


  handleNewTicketFormSubmission = (event) => {
    event.preventDefault();
    this.props.onNewTicketCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4()
    });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleNewTicketFormSubmission}>
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
          <button className="btn btn-primary tixForm" type='submit'>Help!</button>
        </form>
      </React.Fragment>
    )}
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;