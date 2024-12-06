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

console.log({ contact });

contact.id3.fullName = prompt("Full Name:", "undefined");
contact.id3.company = prompt("Company: ", "null");
contact.id3.email = prompt("Email: ", "null");
contact.id3.phoneNumber = prompt("Phone Number: ", "null");
contact.id3.dob = prompt("Date of Birth: ", "null");

console.log(`${contact.id3.fullName}
${contact.id3.company}
${contact.id3.email}
${contact.id3.phoneNumber}
${contact.id3.dob}`);

isConfirm = confirm(
  `Are you sure you want to permanently remove this contact no. ${contact.id3.fullName}?`
);
if (isConfirm == true) {
  console.log(`Contact ${contact.id3.fullName} deleted.`);
  delete contact.id3;
} else {
  console.log("Action canceled.");
}

console.log({ contact });
