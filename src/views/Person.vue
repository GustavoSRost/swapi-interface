<template>
  <div v-if="loading" class="loading"></div>
  <section v-else>
    <router-link :to="{ name: 'people' }" class="bk-home"> Back</router-link>
    <PersonInfo :person="personDATA" />
  </section>
</template>

<script>
import PersonInfo from "@/components/PersonInfo.vue";
export default {
  name: "PersonView",
  components: {
    PersonInfo,
  },
  data() {
    return {
      personDATA: {},
      loading: false,
    };
  },

  methods: {
    async getPerson() {
      try {
        this.loading = true;
        const localPeople = JSON.parse(window.localStorage.getItem("people"));
        const getIDfromName = localPeople.results.filter(name => {
          return name.name.toLowerCase().replaceAll(" ", "-") === this.$route.params.id
            ? name
            : null;
        });
        if (window.localStorage.getItem(getIDfromName[0].name) === null) {
          const fetchData = await fetch(getIDfromName[0].url);
          const data = await fetchData.json();
          this.personDATA = data;
          window.localStorage.setItem(getIDfromName[0].name, JSON.stringify(data));
        } else {
          this.personDATA = JSON.parse(
            window.localStorage.getItem(getIDfromName[0].name)
          );
        }
        this.loading = false;
      } catch (e) {
        throw new Error(e);
      }
    },
  },
  mounted() {
    if (this.$route.name === "person") this.getPerson();
  },
  watch: {
    $route: "getPerson",
  },
};
</script>

<style></style>
