import { createStore } from "vuex";
import { v4 as uuid } from "uuid";

export default createStore({
  state: {
    selectedId: undefined,
    users: [
      {
        name: "Henry",
        address: "The Moon",
        phone: "8011234567",
        email: "email@email.com",
        category: "school",
        id: uuid(),
      },
      {
        name: "Jake",
        address: "New Jersey",
        phone: "8011234321",
        email: "email2@email.com",
        category: "work",
        id: uuid(),
      },
      {
        name: "Carl",
        address: "California",
        phone: "8011239876",
        email: "email@email.com",
        category: "circus",
        id: uuid(),
      },
    ],
  },
  mutations: {
    /**
     * Remove a given contact from the state
     * @param {*} state - Main State
     * @param {*} removePersonId - Identifier of contact to be removed
     */
    removePerson(state, removePersonId) {
      state.users = state.users.filter((user) => user.id !== removePersonId);
    },
    /**
     * Create new contact object in state
     * @param {*} state - Main State
     * @param {*} newPerson - New person object, with required id.
     */
    addPerson(state, newPerson) {
      state.users = [newPerson, ...state.users];
    },
    /**
     * Update a given contact object using id
     * @param {*} state - Main State
     * @param {*} editPerson - contact object to be modified
     */
    editPerson(state, editPerson) {
      const editIndex = state.users.findIndex((obj) => obj.id == editPerson.id);
      state.users[editIndex] = editPerson;
    },
    /**
     * Selects given contact object using id
     * @param {*} state - Main State
     * @param {*} userId - Identifier of selected contact object
     */
    setSelectedUser(state, userId) {
      state.selectedId = userId;
    },
    /**
     * Deselects given contact object;
     * @param {*} state - Main State
     */
    removeSelectedUser(state) {
      state.selectedId = undefined;
    },
  },
  actions: {},
  modules: {},
});
