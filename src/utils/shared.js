import { v4 as uuid } from "uuid";

/**
 * Update a specified contact
 * @param {object} event - html element that has been updated
 * @param {object} oldUser - original contact object
 * @param {string} type - object key
 */
export function updateUser(event, oldUser, type) {
  oldUser[type] = event.target.innerText;
  this.$store.commit("editPerson", oldUser);
}

/**
 * Remove given contact by ID
 * @param {Object} contact - Contact to be removed
 */
export function removeContact(contact) {
  this.$store.commit("removeSelectedUser");
  this.$store.commit("removePerson", contact.id);
}

/**
 * Return to previous page
 */
export function goBack() {
  this.$store.commit("removeSelectedUser");
}

/**
 * Create a new contact, and push to contact view
 */
export function addUser() {
  const id = uuid();
  this.$store.commit("addPerson", { id });
  this.$store.commit("setSelectedUser", id);
}
