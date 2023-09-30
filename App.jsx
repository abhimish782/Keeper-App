import React from "react";
import Card from "./card";
import contacts from "./contacts";

function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      < Card 
      name={contacts[0].name} 
      image={contacts[0].imgURL} 
      email={contacts[0].email}
      info={contacts[0].phone}
      />

< Card 
      name={contacts[1].name} 
      image={contacts[1].imgURL} 
      email={contacts[1].email}
      info={contacts[1].phone}
      />

< Card 
      name={contacts[2].name} 
      image={contacts[2].imgURL} 
      email={contacts[2].email}
      info={contacts[2].phone}
      />

    </div>
  );
}

export default App;
