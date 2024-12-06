// Testing console log
/*
Testing multiple Comment
Testing multiple Comment
*/

//Declaration variable
let var1 = "Variable 1";
const var2 = [1, 2, 3, 4];
console.log(var2);
var2[3] = 0;
console.log(var2);

let result = 2 * 3;
result = "OK " + result;
console.log(result);

let huruf = `Mr "Quote" and 'Quote'`;
console.log(huruf);

let first_name = `Oktavianus`;
let last_name = `Tasak`;
let full_name = `Brother ${first_name + " " + last_name}`;

console.log(`${first_name}
${last_name}
${full_name}`);

console.log("\n");

const contact = {
  id1: {
    fullName: "Alice Johnson",
    company: "Tech Solutions Inc.",
    email: "alice.johnson@techsolutions.com",
    phoneNumber: "123-456-7890",
    dob: "1985-03-15",
  },
  id2: {
    fullName: "Bob Smith",
    company: "Creative Designs Ltd.",
    email: "bob.smith@creativedesigns.com",
    phoneNumber: "234-567-8901",
    dob: "1990-07-22",
  },
  id3: {
    fullName: undefined,
    company: null,
    email: null,
    phoneNumber: null,
    dob: null,
  },
  id4: {
    fullName: "Diana Williams",
    company: "Marketing Experts",
    email: "diana.williams@marketingexperts.com",
    phoneNumber: "456-789-0123",
    dob: "1992-05-04",
  },
  id5: {
    fullName: "Eve Davis",
    company: "Finance Solutions Group",
    email: "eve.davis@financesolutions.com",
    phoneNumber: "567-890-1234",
    dob: "1987-02-18",
  },
};

console.log(contact);

// contact.id3.fullName = prompt("Full Name:", "undefined");
// contact.id3.company = prompt("Company: ", "null");

isConfirm = confirm(
  `Are you sure you want to permanently remove this contact no. ${contact.id3.fullName}?`
);
if (isConfirm == true) {
  console.log(`Contact ${contact.id3.fullName} deleted.`);
  delete contact.id3;
} else {
  console.log("Action canceled.");
}

// contact.id3.fullName = confirm("Full Name:", "undefined");
// contact.id3.company = confirm("Company: ", "null");

console.log(contact);
