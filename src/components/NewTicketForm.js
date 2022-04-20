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
        <h3>This is a form.</h3>
      </React.Fragment>
    )}
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;