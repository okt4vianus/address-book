const contacts = [
  {
    id: 1,
    fullName: "Alice Johnson",
    company: "Tech Solutions Inc.",
    email: "alice.johnson@techsolutions.com",
    phone: "+62 123-456-7890",
    dob: "1985-03-15",
  },
  {
    id: 2,
    fullName: "Bob Smith",
    company: "Creative Designs Ltd.",
    email: "bob.smith@creativedesigns.com",
    phone: "+62 234-567-8901",
    dob: "1990-07-22",
  },
  {
    id: 3,
    fullName: undefined,
    company: null,
    email: null,
    phone: "+62 ",
    dob: null,
  },
  {
    id: 4,
    fullName: "Diana Williams",
    company: "Marketing Experts",
    email: "diana.williams@marketingexperts.com",
    phone: "+62 456-789-0123",
    dob: "1992-05-04",
  },
  {
    id: 5,
    fullName: "Eve Davis",
    company: "Finance Solutions Group",
    email: "eve.davis@financesolutions.com",
    phone: "+62 567-890-1234",
    dob: "1987-02-18",
  },
];

// Function cek id in contacts
function cekId(object, id) {
  if (id <= object.length) {
    return true;
  } else false;
}

// Function add data in contacts
function addContact(object, data) {
  object.push(data);
  index = object.length - 1;
  console.log(`
  Add contact successfully, details of the contact:
  _________________________________________________

  ID            : ${object[index].id}
  Full Name     : ${object[index].fullName}
  Company       : ${object[index].company}
  Email         : ${object[index].email}
  Phone Number  : ${object[index].phone}
  Date of Birth : ${object[index].dob} 
  `);
}

// Function find data by id in contacts
function findContactById(object, index) {
  if (cekId(object, index)) {
    index -= 1;
    console.log(`
  Find contact of id: ${object[index].id} successfully, details of the contact:
  ___________________________________________________________

  ID            : ${object[index].id}
  Full Name     : ${object[index].fullName}
  mail          : ${object[index].email}
  Company       : ${object[index].company}
  Phone Number  : ${object[index].phone}
  Date of Birth : ${object[index].dob} 
  `);
  } else console.log("ID is invalid");
}

// Function to remove contact by id
function removeContactById(object, index) {
  if (cekId(object, index)) {
    index -= 1;
    console.log(`
  Contact removed successfully, details of the removed contact:
  _____________________________________________________________
  
  ID            : ${object[index].id}
  Full Name     : ${object[index].fullName}
  Company       : ${object[index].company}
  Email         : ${object[index].email}
  Phone Number  : ${object[index].phone}
  Date of Birth : ${object[index].dob} 
  `);
    object.splice(index, 1);
  } else console.log("Contact not found");
}

// Function to display all data in contacts
function displayContacts(object) {
  console.log(`
  Display all contacts details:
  _____________________________`);
  for (let i = 0; i < object.length; i++) {
    console.log(`
  ID            : ${object[i].id}
  Full Name     : ${object[i].fullName}
  Company       : ${object[i].company}
  mail          : ${object[i].email}
  Phone Number  : ${object[i].phone}
  Date of Birth : ${object[i].dob}  
    `);
  }
}

// Main program
addContact(contacts, {
  id: 6,
  fullName: "Frank Taylor",
  company: "Logistics Hub",
  email: "frank.taylor@logisticshub.com",
  phone: "+62 678-901-2345",
  dob: "1988-11-11",
});

findContactById(contacts, 3);

removeContactById(contacts, 3);

displayContacts(contacts);
