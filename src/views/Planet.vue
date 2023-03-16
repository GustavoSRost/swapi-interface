<template>
  <section>
    <router-link to="/planets" class="bk-home">Back</router-link>
    <planet-info :planet="planet"></planet-info>
  </section>
</template>

<script>
import PlanetInfo from "@/components/PlanetInfo.vue";
export default {
  name: "PlanetView",
  data() {
    return {
      planet: {},
      loading: false,
    };
  },
  components: {
    PlanetInfo,
  },
  methods: {
    async getPlanet() {
      this.loading = true;
      const localPlanet = JSON.parse(window.localStorage.getItem("planets"));
      const getIDfromName = localPlanet.results.filter(name => {
        return name.name.toLowerCase().replaceAll(" ", "-") === this.$route.params.id
          ? name
          : null;
      });
      if (window.localStorage.getItem(getIDfromName[0].name) === null) {
        const fetchData = await fetch(getIDfromName[0].url);
        const data = await fetchData.json();
        this.planet = data;
        window.localStorage.setItem(getIDfromName[0].name, JSON.stringify(data));
      } else {
        this.planet = JSON.parse(window.localStorage.getItem(getIDfromName[0].name));
      }
      this.loading = false;
    },
  },
  mounted() {
    if (this.$route.name === "planet") this.getPlanet();
  },
};
</script>

<style></style>
