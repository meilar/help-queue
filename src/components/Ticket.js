import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <p className="lead card-text">{props.location} | {props.names}</p>
          <p className="card-body">{props.issue}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string,
  issue: PropTypes.string
};

export default Ticket;