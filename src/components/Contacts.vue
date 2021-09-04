<template>
  <div class="hello">
    <button @click="addUser">Add User</button>
    <ul>
      <li v-for="contact in contacts" :key="contact.name">
        <div>
          <h1 @click="goToContact(contact)">
            {{
              contact.name && contact.name.length > 0
                ? contact.name
                : "Unknown Contact"
            }}
          </h1>
          <div>
            <button @click="goToContact(contact)">View Contact</button>
          </div>
          <div>
            <button @click="removeContact(contact)">Delete Contact</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { addUser, removeContact } from "../utils/shared";
import { setTitle } from "../utils/meta";
export default {
  name: "Contacts",
  methods: {
    goToContact(contact) {
      this.$store.commit("setSelectedUser", contact.id);
    },
    removeContact,
    addUser,
  },
  created() {
    setTitle(`Home | Contacts`);
  },
  computed: {
    /**
     * Get all contacts from state
     * @returns {Object} - all contact objects
     */
    contacts() {
      return this.$store.state.users;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
li h1 {
  cursor: pointer;
}
a {
  color: #42b983;
}
</style>
