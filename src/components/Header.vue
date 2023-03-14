<template>
  <header>
    <router-link to="/" class="logo"
      ><h1 id="logo" title="Star Wars API">Star Wars API</h1></router-link
    >
    <nav class="routes">
      <router-link to="/people">People</router-link>
      <router-link to="/planets">Planets</router-link>
      <router-link to="/starships">Starships</router-link>

      <a href="http://github.com/GustavoSRost" target="_blank" rel="noopener noreferrer"
        >Github</a
      >

      <a
        href="http://linkedin.com/in/Gustavo-rost"
        target="_blank"
        rel="noopener noreferrer"
        >Linkedin</a
      >
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderContent",

  data() {
    return {
      people: [],
      planets: [],
      starships: [],
    };
  },
};
</script>

<style></style>
