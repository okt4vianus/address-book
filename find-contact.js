const contacts = require("./index"); // Import contacts from index.js

function cekId(object, id) {
  if (id <= object.length) {
    return true;
  } else false;
}

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

findContactById(contacts, 3);
