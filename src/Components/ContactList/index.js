import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import ContactGroup from "./ContactGroup";

const ContactList = ({ contactSelector, selectedContact }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    })();
  }, []);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const contactsList = alphabet.map((letter) => {
    const contactGroupList = data.filter((dataEntry) => {
      return dataEntry.name
        .split(" ")
        .slice(-1)[0]
        .toLowerCase()
        .startsWith(letter.toLowerCase());
    });

    return contactGroupList.length !== 0 ? (
      <ContactGroup
        key={uuidv4()}
        contactEntries={contactGroupList}
        letter={letter}
        contactSelector={contactSelector}
      ></ContactGroup>
    ) : null;
  });

  const hidden = selectedContact ? "hidden lg:block" : "block";

  return (
    <div
      className={`w-full lg:w-[50%] p-6 rounded-l-xl overflow-y-scroll ${hidden}`}
    >
      <h2 className="text-center">Contacts</h2>
      <div className="">{contactsList}</div>
    </div>
  );
};

export default ContactList;
