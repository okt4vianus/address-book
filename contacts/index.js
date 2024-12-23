function loadContacts() {
  const storageDataContacts = JSON.parse(
    localStorage.getItem("storageDataContacts")
  );

  if (!storageDataContacts) {
    saveContacts(dataContacts);
    return dataContacts;
  }

  // Convert 'birthdate' strings back into Date objects
  const parsedContacts = storageDataContacts.map((contact) => ({
    ...contact,
    birthdate: contact.birthdate ? new Date(contact.birthdate) : null,
  }));

  return parsedContacts;
  // return storageDataContacts;
}

function formatDateTime(date) {
  if (!date) return null;

  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const urlParams = new URLSearchParams(window.location.search);
const paramsContactId = Number(urlParams.get("id"));

const searchedContacts = loadContacts().filter(
  (contact) => contact.id === paramsContactId
);

console.log(searchedContacts[0].id);

// Replace HTML values
document.querySelector("img").src = searchedContacts[0].avatar;
document.getElementById("id-detail").textContent = searchedContacts[0].id;
document.getElementById("avatar-detail").textContent =
  searchedContacts[0].avatar || null;
document.getElementById("full-name").textContent = searchedContacts[0].fullName;
document.getElementById("full-name-detail").textContent =
  searchedContacts[0].fullName;
document.getElementById("company").textContent =
  searchedContacts[0].company || null;
document.getElementById("company-detail").textContent =
  searchedContacts[0].company || null;
document.getElementById("phone-detail").textContent =
  searchedContacts[0].phone || null;
document.getElementById("email-detail").textContent =
  searchedContacts[0].email || null;
document.getElementById("birthdate-detail").textContent =
  formatDateTime(searchedContacts[0].birthdate) || null;
