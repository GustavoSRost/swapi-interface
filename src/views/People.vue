<template>
  <main class="container">
    <div v-if="loading" class="loading"></div>
    <div v-else>
      <div v-if="this.$route.path === '/people'">
        <h2>Select a character to see more details:</h2>
        <list-perso :people="people"></list-perso>
      </div>
    </div>

    <router-view></router-view>
  </main>
</template>

<script>
import listPerso from "@/components/ListPerso.vue";
export default {
  name: "PeopleView",
  components: {
    listPerso,
  },
  data() {
    return {
      people: {},
      loading: false,
    };
  },
  methods: {
    async fetchPageDATA() {
      this.loading = true;
      const component = this.$route.path.slice(1);
      if (window.localStorage.getItem(component) === null) {
        const fetchData = await fetch(`https://swapi.dev/api/${component}/?page=1`);
        const data = await fetchData.json();
        this.people = data;
        window.localStorage.setItem(component, JSON.stringify(data));
      } else {
        this.people = JSON.parse(window.localStorage.getItem(component));
      }
      this.loading = false;
    },
  },
  created() {
    if (this.$route.path === "/people") this.fetchPageDATA();
    else this.people = JSON.parse(window.localStorage.getItem("people"));
  },
};
</script>

<style></style>
