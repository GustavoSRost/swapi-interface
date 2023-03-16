<template>
  <main class="container">
    <div v-if="loading" class="loading"></div>
    <div v-else>
      <div v-if="this.$route.path === '/starships'">
        <h1>Starships</h1>
        <list-starship :starships="starships"></list-starship>
      </div>
      <router-view></router-view>
    </div>
  </main>
</template>

<script>
import ListStarship from "@/components/ListStarship.vue";
export default {
  name: "StarshipsView",
  components: {
    ListStarship,
  },
  data() {
    return {
      starships: {},
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
        this.starships = data;
        window.localStorage.setItem(component, JSON.stringify(data));
      } else {
        this.starships = JSON.parse(window.localStorage.getItem(component));
      }
      this.loading = false;
    },
  },
  created() {
    if (this.$route.path === "/starships") this.fetchPageDATA();
    else this.starships = JSON.parse(window.localStorage.getItem("starships"));
  },
};
</script>

<style></style>
