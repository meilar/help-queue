import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

class EditTicketForm extends React.Component{


  handleEditTicketFormSubmission = (event) => {
    event.preventDefault();
    this.props.handleSaveEdit({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: this.props.ticket.id
    });
  }

  render() {
    return (
      <React.Fragment>
        <ReusableForm
          formSubmissionHandler={this.handleEditTicketFormSubmission}
          buttonText="Save Changes"
          namesValue = {this.props.ticket.names}
          locationValue = {this.props.ticket.location}
          issueValue = {this.props.ticket.issue}
           />
      </React.Fragment>
    )}
}

EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  handleSaveEdit: PropTypes.func
};

export default EditTicketForm;