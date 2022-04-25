import React from "react";
import NewTicketForm from "./NewTicketForm";
import TicketList from "./TicketList";

class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTicketList: []
    };
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
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm 
        onNewTicketCreation={this.handleAddNewTicketToList} />
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = <TicketList ticketList = {this.state.mainTicketList} />
      buttonText = "Add ticket"
    }
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-4">
            <p className="lead">Get help now. List of outstanding help tickets is displayed to the right.</p>
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