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

  // Redirect to home page
  window.location.href = "/";
});
