<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Contacts v-if="!this.$store.state.selectedId" />
  <SingleContact v-if="this.$store.state.selectedId" />
</template>

<script>
import Contacts from "./components/Contacts.vue";
import SingleContact from "./components/SingleContact.vue";
export default {
  name: "App",
  components: {
    Contacts,
    SingleContact,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
