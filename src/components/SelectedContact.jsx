import { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState({});

  const fetchContact = async () => {
    try {
      const response = await fetch(
        `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
      );
      const data = await response.json();
      setContact(data);
      console.log(contact);
    } catch (error) {
      console.log("wahhhh");
    }
  };

  useEffect(() => {
    fetchContact(selectedContactId);
  }, []);

  return (
    <>
      <h1>{contact.name}</h1>
      <h2>Username: {contact.username}</h2>
      <h2>Email: {contact.email}</h2>
      <button onClick={() => setSelectedContactId(null)}>Return</button>
    </>
  );
}
