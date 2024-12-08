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

for (let i = 0; i < contacts.length; i++) {
  console.log(`
ID        : ${contacts[i].id}
Full Name : ${contacts[i].fullName}
Company   : ${contacts[i].company}
Email     : ${contacts[i].email}
Phone     : ${contacts[i].phone}
DOB       : ${contacts[i].dob}

`);
}
