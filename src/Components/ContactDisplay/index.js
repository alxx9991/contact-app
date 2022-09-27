const ContactDisplay = ({ contact, setSelectedContact }) => {
  return contact ? (
    <div className="flex-col px-6 py-6 flex-grow overflow-y-auto flex">
      <button
        className="self-start text-[#1665F5]"
        onClick={() => {
          setSelectedContact(null);
        }}
      >
        &#x27F5; Back
      </button>
      <h2 className="text-center">{contact.name}</h2>
      {/* Group 1 */}
      <div className="mt-6 gap-1 flex flex-col">
        <div className="info-field">
          <p className="caption">Username</p>
          <p>{contact.username}</p>
        </div>
        <div className="info-field">
          <p className="caption">Phone</p>
          <p>{contact.phone}</p>
        </div>
        <div className="info-field">
          <p className="caption">Email</p>
          <p>{contact.email}</p>
        </div>
        <div className="info-field">
          <p className="caption">Website</p>
          <p>{contact.website}</p>
        </div>
      </div>
      {/* Group 2 - Address*/}
      <div className="mt-8 gap-1 flex flex-col">
        <h3 className="px-1">Address</h3>
        <div className="info-field">
          <p className="caption">Suite</p>
          <p>{contact.address.suite}</p>
        </div>
        <div className="info-field">
          <p className="caption">Street</p>
          <p>{contact.address.street}</p>
        </div>
        <div className="info-field">
          <p className="caption">City</p>
          <p>{contact.address.city}</p>
        </div>
        <div className="info-field">
          <p className="caption">Zipcode</p>
          <p>{contact.address.zipcode}</p>
        </div>
        <div className="info-field">
          <p className="caption">Latitude</p>
          <p>{contact.address.geo.lat}</p>
        </div>
        <div className="info-field">
          <p className="caption">Longitude</p>
          <p>{contact.address.geo.lng}</p>
        </div>
      </div>
      {/* Group 3 - Company*/}
      <div className="mt-8 gap-1 flex flex-col">
        <h3 className="px-1">Company</h3>
        <div className="info-field">
          <p className="caption">Company Name</p>
          <p>{contact.company.name}</p>
        </div>
        <div className="info-field">
          <p className="caption">Catchphrase</p>
          <p>{contact.company.catchPhrase}</p>
        </div>
        <div className="info-field">
          <p className="caption">BS</p>
          <p>{contact.company.bs}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="justify-center items-center flex-grow text-[#888888] hidden lg:flex">
      Select a Contact to see details
    </div>
  );
};

export default ContactDisplay;
