const ContactEntry = ({ contact, contactSelector }) => {
  const { name } = contact;
  const namesArray = name.split(" ");
  const lastName = namesArray.slice(-1)[0];
  const firstNamesArray = namesArray.slice(0, -1);
  const firstNames = firstNamesArray.join(" ") + " ";

  const contactClickHandler = () => {
    contactSelector(contact);
  };

  return (
    <div
      className="py-1 cursor-pointer hover:text-[#1665F5]"
      onClick={contactClickHandler}
    >
      {firstNames}
      <span className="font-medium">{lastName}</span>
      <hr />
    </div>
  );
};

export default ContactEntry;
