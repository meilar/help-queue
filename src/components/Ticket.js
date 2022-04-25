import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <a onClick= {() => props.whenTicketClicked(props.id)} className="text-decoration-none">{props.location} | {props.names}</a>
          <p className="card-body">{props.issue}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

export default Ticket;