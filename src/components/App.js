import React from "react";
import Header from"./Header";
import TicketControl from "./TicketControl";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  const name = "Thato";
  const name2 = "Haley";
  return (
    <React.Fragment>
      <div class="container">
        <Header />
        <TicketControl />
      </div>
    </React.Fragment>
  );
}

export default App;