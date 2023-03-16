<template>
  <div v-if="loading" class="loading"></div>
  <section v-else>
    <router-link :to="{ name: 'starships' }" class="bk-home"> Back</router-link>

    <starship-info :starship="starship"></starship-info>
  </section>
</template>

<script>
import StarshipInfo from "@/components/StarshipInfo.vue";

export default {
  name: "StarshipView",
  components: {
    StarshipInfo,
  },
  data() {
    return {
      starship: {},
      loading: false,
    };
  },

  methods: {
    async getStarship() {
      this.loading = true;
      const localStarship = JSON.parse(window.localStorage.getItem("starships"));
      const getIDfromName = localStarship.results.filter(name => {
        return name.name.toLowerCase().replaceAll(" ", "-") === this.$route.params.id
          ? name
          : null;
      });
      if (window.localStorage.getItem(getIDfromName[0].name) === null) {
        const fetchData = await fetch(getIDfromName[0].url);
        const data = await fetchData.json();
        this.starship = data;
        window.localStorage.setItem(getIDfromName[0].name, JSON.stringify(data));
      } else {
        this.starship = JSON.parse(window.localStorage.getItem(getIDfromName[0].name));
      }
      this.loading = false;
    },
  },
  mounted() {
    if (this.$route.name === "starship") this.getStarship();
  },
  watch: {
    $route: "getStarship",
  },
};
</script>

<style></style>
