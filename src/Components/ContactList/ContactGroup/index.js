import ContactEntry from "../ContactEntry";
import { v4 as uuidv4 } from "uuid";

const ContactGroup = ({ letter, contactEntries, contactSelector }) => {
  const contactEntriesElements = contactEntries.map((entry) => {
    return (
      <ContactEntry
        contact={entry}
        key={uuidv4()}
        contactSelector={contactSelector}
      ></ContactEntry>
    );
  });
  return (
    <div className="mt-6">
      <h3>{letter}</h3>
      {contactEntriesElements}
    </div>
  );
};

export default ContactGroup;
