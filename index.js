const dataContacts = [
  {
    id: 4821,
    fullName: "Alice Johnson",
    company: "Tech Solutions Inc.",
    email: "alice.johnson@techsolutions.com",
    phone: "+62 123-456-7890",
    birthdate: "1985-03-15",
  },
  {
    id: 1954,
    fullName: "Bob Smith",
    company: "Creative Designs Ltd.",
    email: "bob.smith@creativedesigns.com",
    phone: "+62 234-567-8901",
    birthdate: "1990-07-22",
  },
  {
    id: 8346,
    fullName: "Agus Dewantoro",
    company: null,
    email: null,
    phone: "+62 ",
    birthdate: null,
  },
  {
    id: 6732,
    fullName: "Diana Williams",
    company: "Marketing Experts",
    email: "diana.williams@marketingexperts.com",
    phone: "+62 456-789-0123",
    birthdate: "1992-05-04",
  },
  {
    id: 2491,
    fullName: "Eve Davis",
    company: "Finance Solutions Group",
    email: "eve.davis@financesolutions.com",
    phone: "+62 567-890-1234",
    birthdate: "1987-02-18",
  },
];

// Declare all function

// Function check id in data contacts
function checkId(contacts, id) {
  if (contacts.find((contact) => contact.id === id)) {
    return contacts.find((contact) => contact.id === id);
  } else console.log(`Contact with ID ${id} not found.`);
}

// Function to generate a unique ID
function generateId(params) {
  return Math.floor(Math.random() * 9000 + 1000);
}

// Function add data in data contacts
function addContact(contacts, newContact) {
  const newContactWithId = {
    id: generateId(),
    fullName: newContact.fullName,
    company: newContact.company,
    email: newContact.email,
    phone: newContact.phone,
    birthdate: newContact.birthdate,
  };
  contacts.push(newContactWithId);
  const lastContactIndex = contacts.length - 1;
  console.log(`
  Add contact successfully, details of the contact:
  _________________________________________________

  ID        : ${contacts[lastContactIndex].id}
  Full Name : ${contacts[lastContactIndex].fullName}
  Company   : ${contacts[lastContactIndex].company}
  Email     : ${contacts[lastContactIndex].email}
  Phone     : ${contacts[lastContactIndex].phone}
  Birthdate : ${contacts[lastContactIndex].birthdate}
  `);
}

// Function find data by id in contacts
function findContactById(contacts, id) {
  const contact = contacts.find((contact) => contact.id === id);

  if (contact) {
    console.log(`
  Find contact of ID: ${contact.id} successfully, details of the contact:
  ___________________________________________________________

  ID        : ${contact.id}
  Full Name : ${contact.fullName}
  mail      : ${contact.email}
  Company   : ${contact.company}
  Phone     : ${contact.phone}
  Birthdate : ${contact.birthdate}
  `);
  } else console.log(`  Find contact of ID ${id} not found.`);
}

// Function to remove contact last input
function removeLastContact(contacts) {
  if (contacts.length > 0) {
    const lastContactIndex = contacts.length - 1;
    console.log(`
  Contact removed successfully, details of the removed contact:
  _____________________________________________________________

  ID        : ${contacts[lastContactIndex].id}
  Full Name : ${contacts[lastContactIndex].fullName}
  Company   : ${contacts[lastContactIndex].company}
  Email     : ${contacts[lastContactIndex].email}
  Phone     : ${contacts[lastContactIndex].phone}
  Birthdate : ${contacts[lastContactIndex].birthdate}
  `);
    contacts.pop();
  } else {
    console.log(`  No contact to remove due array is empty`);
  }
}

// Function to display all data in contacts
function displayContacts(contacts) {
  // Display as column`)
  if (contacts.length > 0) {
    console.log(`
  DISPLAY ALL CONTACTS - ${contacts.length} records
  _________________________________________________`);

    for (let index = 0; index < contacts.length; index++) {
      console.log(`  ID        : ${contacts[index].id}
  Full Name : ${contacts[index].fullName}
  Company   : ${contacts[index].company}
  Email     : ${contacts[index].email}
  Phone     : ${contacts[index].phone}
  Birthdate : ${contacts[index].birthdate}
  `);
    }
  } else {
    console.log(`
  DISPLAY ALL CONTACTS - ${contacts.length} records
  _________________________________________________
  No record found
    `);
  }

  // Display as row
  //   console.log(`
  //   DISPLAY ALL CONTACTS:
  //   ID | Full Name ${" ".repeat(10)} | Company ${" ".repeat(
  //     20
  //   )}| Email ${" ".repeat(30)} | Phone ${" ".repeat(12)} | Birthdate
  //   ________________________${"_".repeat(107)}`);
  //   for (let index = 0; index < contacts.length; index++) {
  //     let spacingName = contacts[index].fullName
  //       ? 19 - contacts[index].fullName.length
  //       : 15;
  //     let spacingCompany = contacts[index].company
  //       ? 26 - contacts[index].company.length
  //       : 22;
  //     let spacingEmail = contacts[index].email
  //       ? 35 - contacts[index].email.length
  //       : 31;
  //     let spacingPhone = contacts[index].phone
  //       ? 17 - contacts[index].phone.length
  //       : 12;
  //     console.log(`
  //   ${contacts[index].id}  | ${contacts[index].fullName} ${" ".repeat(
  //       spacingName
  //     )} | ${contacts[index].company} ${" ".repeat(spacingCompany)} | ${
  //       contacts[index].email
  //     } ${" ".repeat(spacingEmail)} | ${contacts[index].phone} ${" ".repeat(
  //       spacingPhone
  //     )} | ${contacts[index].birthdate}`);
  //   }
}

// Main program
addContact(dataContacts, {
  fullName: "Frank Taylor",
  company: "Logistics Hub",
  email: "frank.taylor@logisticshub.com",
  phone: "+62 678-901-2345",
  birthdate: "1988-11-11",
});

findContactById(dataContacts, 2491);

removeLastContact(dataContacts);
removeLastContact(dataContacts);
removeLastContact(dataContacts);
removeLastContact(dataContacts);
removeLastContact(dataContacts);
removeLastContact(dataContacts);

displayContacts(dataContacts);
