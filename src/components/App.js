import React from "react";
import Header from"./Header";
import TicketControl from "./TicketControl";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <TicketControl />
      </div>
    </React.Fragment>
  );
}

export default App;