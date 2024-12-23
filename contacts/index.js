const urlParams = new URLSearchParams(window.location.search);
const paramsContactId = Number(urlParams.get("id"));

const searchedContact = loadContacts().find(
  (contact) => contact.id === paramsContactId
);

const contactCardElement = document.getElementById("contact-card");

contactCardElement.innerHTML = `
  <img
    src="${searchedContact.avatar}"
    alt="Contact Avatar"
    class="w-24 h-24 rounded-full shadow"
  />
  <h2 id="full-name" class="text-2xl font-semibold">${searchedContact.fullName}</h2>
  <p id="company" class="text-gray-600">${searchedContact.company}</p>
`;

// Replace HTML values
const contactDetailElement = document.getElementById("contact-detail");

contactDetailElement.innerHTML = `
  <img
    src="${searchedContact.avatar}"
    alt="Contact Avatar"
    class="w-24 h-24 rounded-full shadow"
  />
  <div class="flex justify-start">
    <span class="text-gray-600">ID</span>
    <span class="text-gray-800 ml-20">${searchedContact.id}</span>
  </div>
  <div class="flex justify-start">
    <span class="text-gray-600">Avatar</span>
    <span class="text-gray-800 ml-12">${searchedContact.avatar || null}</span>
  </div>
  <div class="flex justify-start">
    <span class="text-gray-600">Full Name</span>
    <span class="text-gray-800 ml-5">${searchedContact.fullName}</span>
  </div>
  <div class="flex justify-start">
    <span class="text-gray-600">Company</span>
    <span class="text-gray-800 ml-5">${searchedContact.company || null}</span>
  </div>
  <div class="flex justify-start">
    <span class="text-gray-600">Phone</span>
    <span class="text-gray-800 ml-11">${searchedContact.phone || null}</span>
  </div>
  <div class="flex justify-start">
    <span class="text-gray-600">Email</span>
    <span class="text-gray-800 ml-12">${searchedContact.email || null}</span>
  </div>
  <div class="flex justify-start">
    <span class="text-gray-600">Birthdate</span>
    <span class="text-gray-800 ml-5"
      >${formatDateTime(searchedContact.birthdate) || null}</span
    >
  </div>
`;
