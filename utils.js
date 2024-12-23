function generateId(contacts) {
  if (contacts.length === 0) {
    return 1;
  }
  return contacts[contacts.length - 1].id + 1;
}

function formatDateTime(date) {
  if (!date) return null;

  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function saveContacts(data) {
  localStorage.setItem("storageDataContacts", JSON.stringify(data));
}

function loadContacts() {
  const storageDataContacts = JSON.parse(
    localStorage.getItem("storageDataContacts")
  );

  if (!storageDataContacts) {
    saveContacts(dataContacts);
    return dataContacts;
  }

  // Convert 'birthdate' strings back into Date objects
  const parsedContacts = storageDataContacts.map((contact) => ({
    ...contact,
    birthdate: contact.birthdate ? new Date(contact.birthdate) : null,
  }));

  return parsedContacts;
  // return storageDataContacts;
}
