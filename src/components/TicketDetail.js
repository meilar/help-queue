import React from "react";
import PropTypes from "prop-types"

function TicketDetail(props) {

  return (
    <React.Fragment>
      <div className="card detailCard">
        <div className='card-body'>
          <p className='card-text'>This ticket was submitted by {props.ticket.names}. Their issue location is <strong>{props.ticket.location}</strong>. Their summary of the issue is: <em>{props.ticket.issue}</em></p>
          {/* eslint-disable-next-line */}
          <a onClick={()=> props.onClickingDelete(props.ticket.id)} className="text-decoration-none text-danger">Delete Ticket</a>
        </div>
      </div>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default TicketDetail;