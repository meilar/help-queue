import React from "react";

function TicketDetail(props) {
  return (
    <React.Fragment>
      <div className="card detailCard">
        <div className='card-body'>
          <p className='card-text'>This ticket was submitted by {props.ticket.names}. Their issue location is <strong>{props.ticket.location}</strong>. Their summary of the issue is: <em>{props.ticket.issue}</em></p>
        </div>
      </div>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object
};

export default TicketDetail;