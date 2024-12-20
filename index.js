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

function renderContacts(contacts) {
  const contactsListElement = document.getElementById("contacts-list");

  const contactsListHtmlString = contacts
    .map((contact) => {
      const date = formatDateTime(contact.birthdate);

      return `
      <li class="pt-4">
        <p>ID       : ${contact.id}</p>
        <p>Full Name: ${contact.fullName}</p>
        <p>Company  : ${contact.company}</p>
        <p>Email    : ${contact.email}</p>
        <p>Phone    : ${contact.phone}</p>
        <p>Birthdate: ${date}</p>
        <div>
          <button class="border rounded bg-red-500 text-xs text-white px-1 py-0.5">Delete</button>
        </div>
      </li>
      `;
    })
    .join("");

  console.log({ contactsListHtmlString });

  contactsListElement.innerHTML = contactsListHtmlString;
}

function searchContacts(contacts, searchTerm) {
  const searchedContacts = contacts.filter((contact) => {
    return (
      (contact.fullName &&
        contact.fullName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (contact.company &&
        contact.company.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  if (searchedContacts.length <= 0) {
    console.log("No contact(s) found");
    return;
  }

  renderContacts(searchedContacts);
}

function generateId(contacts) {
  return contacts[contacts.length - 1].id + 1;
}

function addContact(contacts, newContactInput) {
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
  saveContacts(dataContacts);
  renderContacts(dataContacts);
}

function deleteContact(contacts, contactId) {
  const filteredContacts = contacts.filter((contact) => {
    return contact.id === contactId;
  });

  const filterContacts = contacts.filter((contact) => {
    return contact.id != contactId;
  });

  if (filteredContacts.length <= 0) {
    console.log(`There is no contact with the ID ${contactId} to delete`);
    return;
  }

  dataContacts = filterContacts;
  saveContacts(dataContacts);
  renderContacts(dataContacts);
}

function updateContact(contacts, contactId, updateContactInput) {
  const originalContact = contacts.find((contact) => contact.id === contactId);

  if (!originalContact) {
    console.log(`Contact with ID ${contactId} not found.`);
    return;
  }

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
  saveContacts(dataContacts);
  renderContacts(dataContacts);
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

function formatDateTime(date) {
  if (!date) return null;

  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Run Address Book functions
 */

renderContacts(loadContacts());

// searchContacts(loadContacts(), "ltd");

// addContact(loadContacts(), {
//   fullName: "Frank Taylor",
//   company: "Logistics Hub",
//   email: "frank.taylor@logisticshub.com",
//   phone: "+62 678-901-2345",
//   birthdate: "1988-11-11",
// });

// deleteContact(loadContacts(), 4);

// updateContact(loadContacts(), 5, {
//   phone: "+62 987-654-3210",
//   company: "Bank Indonesia",
// });
