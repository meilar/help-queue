import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";
import TicketDetail from "./TicketDetail";
import EditTicketForm from "./EditTicketForm";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTicket: null,
      editing: false,
      editingTicket: null
    };
  }

  handleClick = () => {
    const { dispatch } = this.props;
    const action = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action);
  }
  //CREATE

  handleAddNewTicketToList = (newTicket) => {
    const { dispatch } = this.props;
    const { id, names, location, issue } = newTicket;
    const action = {
      type: "ADD_TICKET",
      id: id,
      names: names,
      location: location,
      issue: issue
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  //READ
  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.props.mainTicketList[id];
    this.setState({selectedTicket: selectedTicket});
  }

  //UPDATE
  handleEditClick = (id) => {
    const editingTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({editingTicket: editingTicket});
    this.setState({editing: true});
  }

  handleSaveEdit = (editedTicket) => {
    const { dispatch } = this.props;
    const { id, names, location, issue } = editedTicket;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      names: names,
      location: location,
      issue: issue
    }
    dispatch(action);
    this.setState({
      editing: false,
      editingTicket: null
    })
  }

  //DELETE
  handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TICKET',
      id: id
    }
    dispatch(action);
    this.setState({selectedTicket: null});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let ticketDetailState = null;

    if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm 
        onNewTicketCreation={this.handleAddNewTicketToList} />
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList 
        ticketList = {this.props.mainTicketList}
        onTicketSelection = {this.handleChangingSelectedTicket} />
      buttonText = "Add ticket"
    }

    if(this.state.selectedTicket != null) {
      ticketDetailState = <TicketDetail 
        ticket = {this.state.selectedTicket} 
        onClickingDelete = {this.handleDeletingTicket}
        onClickingEdit = {this.handleEditClick} />
    }

    if(this.state.editing) {
      ticketDetailState = <EditTicketForm
        ticket = {this.state.editingTicket}
        handleSaveEdit = {this.handleSaveEdit} />
      buttonText = "Save Changes"
    }

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-4">
            <p className="lead">Get help now. List of outstanding help tickets is displayed to the right.</p>
            {ticketDetailState}
          </div>
          <div className="col-4">
          {currentlyVisibleState}
          <button className="btn btn-warning" onClick={this.handleClick}>{buttonText}</button>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

TicketControl.propTypes = {
  mainTicketList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainTicketList: state.mainTicketList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

TicketControl = connect(mapStateToProps)(TicketControl);

export default TicketControl;