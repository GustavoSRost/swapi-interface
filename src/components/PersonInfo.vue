<template>
  <div>
    <div>
      <h2>{{ person.name }}</h2>
      <ul>
        <li>Birth Year: {{ person.birth_year }}</li>
        <li>Hair color: {{ person.hair_color }}</li>
        <li>Homeworld: yrd</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonInfo",
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      home: null,
    };
  },
  methods: {
    async getHomeDATA() {
      const url = this.person.homeworld;
      const fetchData = await fetch(url);
      const data = await fetchData.json();
      this.home = data;
    },
  },
  watch: {
    person: "getHomeDATA",
  },
};
</script>

<style></style>
