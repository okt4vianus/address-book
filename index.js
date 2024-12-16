let dataContacts = [
  {
    id: 1,
    fullName: "Alice Johnson",
    company: "Tech Solutions Inc.",
    email: "alice.johnson@techsolutions.com",
    phone: "+62 123-456-7890",
    birthdate: new Date("1985-03-15"),
  },
  {
    id: 2,
    fullName: "Bob Smith",
    company: "Creative Designs Ltd.",
    email: "bob.smith@creativedesigns.com",
    phone: "+62 234-567-8901",
    birthdate: new Date("1990-07-22"),
  },
  {
    id: 3,
    fullName: "Agus Dewantoro",
    company: null,
    email: null,
    phone: "+62 ",
    birthdate: null,
  },
  {
    id: 4,
    fullName: "Diana Williams",
    company: "Marketing Experts",
    email: "diana.williams@marketingexperts.com",
    phone: "+62 456-789-0123",
    birthdate: new Date("1992-05-04"),
  },
  {
    id: 5,
    fullName: "Eve Davis",
    company: "Finance Solutions Group",
    email: "eve.davis@financesolutions.com",
    phone: "+62 567-890-1234",
    birthdate: new Date("1987-02-18"),
  },
];

// Function Render Contacts
function renderContacts(contacts) {
  console.log(`
  DISPLAY ALL CONTACTS - ${contacts.length} records
  _________________________________________________`);
  contacts.forEach((contact) => {
    const date = contact.birthdate
      ? contact.birthdate.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : null;
    console.log(`  ID        : ${contact.id}
  Full Name : ${contact.fullName}
  Company   : ${contact.company}
  Email     : ${contact.email}
  Phone     : ${contact.phone}
  Birthdate : ${date}
  `);
  });
}

// Function Search Contact
function searchContact(contacts, searchTerm) {
  const searchedContact = contacts.filter((contact) => {
    return (
      (contact.fullName &&
        contact.fullName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (contact.company &&
        contact.company.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  if (searchedContact.length <= 0) {
    console.log("No contact(s) found");
    return;
  }

  renderContacts(searchedContact);
}

// Function Generate ID
function generateId(contacts) {
  return contacts[contacts.length - 1].id + 1;
}

// Function Add Contact
function addContact(contacts, newContactInput) {
  // const newContact = [...contacts, newContactInput];
  const newContact = {
    id: generateId(contacts),
    fullName: newContactInput.fullName,
    company: newContactInput.company,
    email: newContactInput.email,
    phone: newContactInput.phone,
    birthdate: new Date(newContactInput.birthdate),
  };

  const newContacts = [...contacts, newContact];
  dataContacts = newContacts;
  renderContacts(dataContacts);
}

// Function Delete Contact
function deleteContact(contacts, contactId) {
  const delContact = contacts.filter((contact) => {
    return contact.id === contactId;
  });
  const filterContacts = contacts.filter((contact) => {
    return contact.id != contactId;
  });

  dataContacts = filterContacts;
  renderContacts(delContact);
}

// Function Edit Contact
function updateContact(contacts, contactId, updateContactInput) {
  const originalContact = contacts.find((contact) => {
    return contact.id === contactId;
  });

  const updateContact = {
    id: contactId,
    fullName: updateContactInput.fullName || originalContact.fullName,
    company: updateContactInput.company || originalContact.company,
    email: updateContactInput.email || originalContact.email,
    phone: updateContactInput.phone || originalContact.phone,
    birthdate: new Date(
      updateContactInput.birthdate || originalContact.birthdate
    ),
  };

  const updatedContacts = contacts.map((contact) => {
    if (contact.id === contactId) {
      return updateContact;
    }
    return contact;
  });

  dataContacts = updatedContacts;
  renderContacts(dataContacts);
}

// Main program
// renderContacts(dataContacts);

// searchContact(dataContacts, "ltd");

// addContact(dataContacts, {
//   fullName: "Frank Taylor",
//   company: "Logistics Hub",
//   email: "frank.taylor@logisticshub.com",
//   phone: "+62 678-901-2345",
//   birthdate: "1988-11-11",
// });

// deleteContact(dataContacts, 4);

// updateContact(dataContacts, 5, {
//   phone: "+62 987-654-3210",
//   company: "Bank Indonesia",
// });
