const contacts = require("./index"); // Import contacts from index.js

function cekId(object, id) {
  if (id <= object.length) {
    return true;
  } else false;
}

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

removeContactById(contacts, 3);
