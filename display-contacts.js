const contacts = require("./index"); // Import contacts from index.js

function displayContacts(object) {
  console.log(`
    DISPLAY ALL CONTACTS:
  
    ID | Full Name ${" ".repeat(10)} | Company ${" ".repeat(
    20
  )}| Email ${" ".repeat(30)} | Phone Number ${" ".repeat(5)} | Date of Birth
    ________________________${"_".repeat(107)}`);
  for (let i = 0; i < object.length; i++) {
    let lenname = object[i].fullName ? 19 - object[i].fullName.length : 15;
    let lencompany = object[i].company ? 26 - object[i].company.length : 22;
    let lenemail = object[i].email ? 35 - object[i].email.length : 31;
    let lenphone = object[i].phone ? 17 - object[i].phone.length : 12;
    console.log(`
    ${object[i].id}  | ${object[i].fullName} ${" ".repeat(lenname)} | ${
      object[i].company
    } ${" ".repeat(lencompany)} | ${object[i].email} ${" ".repeat(
      lenemail
    )} | ${object[i].phone} ${" ".repeat(lenphone)} | ${object[i].dob}`);
  }
  console.log(``);
}

displayContacts(contacts);
