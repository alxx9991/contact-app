import ContactList from "../ContactList";
import ContactDisplay from "../ContactDisplay";
import { useState } from "react";

const ContactApp = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="min-w-[360px] w-[80vw] max-w-[500px] h-[80vh] lg:min-w-[900px] lg:max-w-[900px] flex flex-row shadow-md rounded-xl bg-white my-auto">
      <ContactList
        contactSelector={setSelectedContact}
        selectedContact={selectedContact}
      ></ContactList>
      <ContactDisplay
        contact={selectedContact}
        setSelectedContact={setSelectedContact}
      ></ContactDisplay>
    </div>
  );
};

export default ContactApp;
