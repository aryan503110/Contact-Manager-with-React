import React from "react";
import "./ContactList.css";

function ContactList({ contact,removeContact }) {
  return (
    <div className="contact-list">
      {contact.map((val, index) => (
        <div key={index} className="contact-card">
          <h1 className="contact-name">{val.data.name}</h1>
          <h2 className="contact-name">{val.data.email}</h2>
          <button className="button" onClick={()=>removeContact(val.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
