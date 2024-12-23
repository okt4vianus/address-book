function saveContacts(data) {
  localStorage.setItem("storageDataContacts", JSON.stringify(data));
}

function loadContacts() {
  const storageDataContacts = JSON.parse(
    localStorage.getItem("storageDataContacts")
  );

  if (!storageDataContacts) {
    return [];
  }

  // Convert 'birthdate' strings back into Date objects
  const parsedContacts = storageDataContacts.map((contact) => ({
    ...contact,
    birthdate: contact.birthdate ? new Date(contact.birthdate) : null,
  }));

  return parsedContacts;
}

function generateId(contacts) {
  if (contacts.length === 0) {
    return 1;
  }
  return contacts[contacts.length - 1].id + 1;
}

// Handle form submission
const contactFormElement = document.getElementById("new-contact-form");

contactFormElement.addEventListener("submit", async (event) => {
  event.preventDefault();

  const contactFormData = new FormData(contactFormElement);

  // Collect form data
  const formData = {
    id: generateId(loadContacts()),
    avatar: contactFormData.get("avatar") || "https://i.pravatar.cc/150?img=1",
    fullName: contactFormData.get("full-name"),
    company: contactFormData.get("company") || null,
    email: contactFormData.get("email") || null,
    phone: contactFormData.get("phone") || null,
    birthdate: contactFormData.get("birthdate")
      ? new Date(contactFormData.get("birthdate"))
      : null,
  };

  const contacts = loadContacts();

  // Add new contact to the list
  const updatedContacts = [...contacts, formData];
  saveContacts(updatedContacts);

  // Redirect to the index.html page
  window.location.href = "/";
});
