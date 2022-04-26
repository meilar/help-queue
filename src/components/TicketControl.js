import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";
import TicketDetail from "./TicketDetail"
import EditTicketForm from "./EditTicketForm"

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTicketList: [],
      selectedTicket: null,
      editing: false,
      editingTicket: null
    };
  }

  handleSaveEdit = (editedTicket) => {
    const editedMainTicketList = this.state.mainTicketList
      .filter(ticket => ticket.id !== this.state.editingTicket)
      .concat(editedTicket);
    this.setState({
      mainTicketList: editedMainTicketList,
      editing: false,
      editingTicket: null
    });

  }

  handleEditClick = (id) => {
    const editingTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({editingTicket: editingTicket});
    this.setState({editing: true});
  }

  handleDeletingTicket = (id) => {
    const newMainTicketList = this.state.mainTicketList.filter(ticket => ticket.id !== id);
    this.setState({
      mainTicketList: newMainTicketList,
      selectedTicket: null
    })
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedTicket: selectedTicket});
  }

  handleAddNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({mainTicketList : newMainTicketList, formVisibleOnPage: false });
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let ticketDetailState = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm 
        onNewTicketCreation={this.handleAddNewTicketToList} />
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList 
        ticketList = {this.state.mainTicketList}
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

export default TicketControl;