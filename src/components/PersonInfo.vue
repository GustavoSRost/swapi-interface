<template>
  <div>
    <h2>{{ person.name }}</h2>
    <div class="person-detail grid">
      <div v-if="person.name" class="person-img">
        <img
          :src="
            require('@/assets/' +
              this.person.name.toLowerCase().replaceAll(' ', '-') +
              '1.png')
          "
          alt=""
        />
      </div>
      <div class="info-person">
        <ul>
          <li>
            <h3>Birth Year:</h3>
            {{ person.birth_year }}
          </li>
          <li>
            <h3>Height:</h3>
            {{ person.height }}cm
          </li>
          <li>
            <h3>Mass:</h3>
            {{ person.mass }}kg
          </li>
          <li>
            <h3>Homeworld:</h3>
            {{ home.name }}
          </li>
        </ul>
        <div class="mv-person">
          <h2>Movies</h2>
          <ul>
            <li v-for="(film, key) in movies.movieName" :key="film + key">
              {{ film }}
            </li>
          </ul>
        </div>
      </div>
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
      home: {
        name: "",
      },
      movies: {
        movieName: [],
      },
    };
  },
  methods: {
    async getHomeDATA() {
      const url = this.person.homeworld;
      const fetchData = await fetch(url);
      const data = await fetchData.json();
      this.home = data;
    },
    async getFilmData() {
      const movieList = this.person.films;
      if (movieList.length > 0) {
        movieList.forEach(async movie => {
          const fetchData = await fetch(movie);
          const data = await fetchData.json();
          this.movies.movieName.push(data.title);
        });
      }
    },
  },
  watch: {
    person: ["getHomeDATA", "getFilmData"],
  },
};
</script>

<style></style>
