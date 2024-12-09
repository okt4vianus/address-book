const contacts = require("./index"); // Import contacts from index.js

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

addContact(contacts, {
  id: 6,
  fullName: "Frank Taylor",
  company: "Logistics Hub",
  email: "frank.taylor@logisticshub.com",
  phone: "+62 678-901-2345",
  dob: "1988-11-11",
});

module.exports = contacts; // Export updated contacts array if needed elsewhere
