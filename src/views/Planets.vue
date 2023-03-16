<template>
  <main class="container">
    <div v-if="loading" class="loading"></div>
    <div v-else>
      <div v-if="this.$route.path === '/planets'">
        <router-link :to="{ name: 'home' }" class="bk-home"> Back to Home</router-link>
        <h2>Planets</h2>
        <list-planet :planets="planets"></list-planet>
      </div>
    </div>

    <router-view></router-view>
  </main>
</template>

<script>
import ListPlanet from "@/components/ListPlanet.vue";
export default {
  name: "PlanetsView",
  data() {
    return {
      planets: {},
      loading: false,
    };
  },
  components: {
    ListPlanet,
  },

  methods: {
    async fetchPageDATA() {
      this.loading = true;
      const component = this.$route.path.slice(1);
      if (window.localStorage.getItem(component) === null) {
        const fetchData = await fetch(`https://swapi.dev/api/${component}/?page=1`);
        const data = await fetchData.json();
        this.planets = data;
        window.localStorage.setItem(component, JSON.stringify(data));
      } else {
        this.planets = JSON.parse(window.localStorage.getItem(component));
      }
      this.loading = false;
    },
  },
  created() {
    if (this.$route.path === "/planets") this.fetchPageDATA();
    else this.people = JSON.parse(window.localStorage.getItem("planets"));
  },
};
</script>

<style></style>
