import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import Moment from 'moment';

class NewTicketForm extends React.Component{

  handleNewTicketFormSubmission = (event) => {
    event.preventDefault();
    this.props.onNewTicketCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4(),
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    });
  }

  render() {
    return (
      <React.Fragment>
        <ReusableForm
          formSubmissionHandler={this.handleNewTicketFormSubmission}
          buttonText="Help!"
          namesValue = ''
          locationValue = ''
          issueValue = '' />
      </React.Fragment>
    )}
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;