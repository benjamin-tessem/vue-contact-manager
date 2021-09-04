<template>
  <title>{{ contact.name }}</title>
  <div class="hello">
    <button @click="addUser">Add User</button>
    <ul>
      <!-- 
        @params {
        name: string,
        address: string,
        phone: string,
        email: string,
        category: string,
      }
        -->
      <li>
        <div>
          <h1
            contenteditable="true"
            placeholder="Enter a name..."
            @blur="updateUser($event, contact, `name`)"
          >
            {{ contact.name }}
          </h1>
          <h2
            contenteditable="true"
            placeholder="Enter a phone number..."
            @blur="updateUser($event, contact, `phone`)"
          >
            {{ contact.phone }}
          </h2>
          <p
            contenteditable="true"
            placeholder="Enter an address..."
            @blur="updateUser($event, contact, `address`)"
          >
            {{ contact.address }}
          </p>
          <p
            contenteditable="true"
            placeholder="Enter an email..."
            @blur="updateUser($event, contact, `email`)"
          >
            {{ contact.email }}
          </p>
          <p
            contenteditable="true"
            placeholder="Enter a category..."
            @blur="updateUser($event, contact, `category`)"
          >
            {{ contact.category }}
          </p>
          <div>
            <button @click="goBack">Go Back</button>
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
import { updateUser, removeContact, goBack, addUser } from "../utils/shared";
import { setTitle } from "../utils/meta";
export default {
  name: "SingleContacts",
  methods: {
    updateUser,
    removeContact,
    goBack,
    addUser,
  },
  created() {
    setTitle(
      `${
        this.contact.name && this.contact.name.length > 0
          ? this.contact.name
          : "Unknown"
      } | Contacts`
    );
  },
  updated() {
    setTitle(
      `${
        this.contact.name && this.contact.name.length > 0
          ? this.contact.name
          : "Unknown"
      } | Contacts`
    );
  },
  computed: {
    /**
     * Retrieves specified contact from state
     * @returns {[{
        name: string,
        address: string,
        phone: string,
        email: string,
        category: string,
      }]}
     */
    contact() {
      return this.$store.state.users.find(
        (user) => user.id === this.$store.state.selectedId
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
[contenteditable="true"]:empty:before {
  content: attr(placeholder);
  pointer-events: none;
  display: block; /* For Firefox */
  color: lightgray;
}
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
a {
  color: #42b983;
}
</style>
