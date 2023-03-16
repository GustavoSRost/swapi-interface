<template>
  <div id="planet-list-cp">
    <ul>
      <li
        v-for="(planet, key) in planets.results"
        :key="planet.name + key"
        :class="planet.name.toLowerCase().replaceAll(' ', '-')"
      >
        <router-link
          :to="{
            name: 'planet',
            params: { id: planet.name.toLowerCase().replaceAll(' ', '-') },
          }"
        >
          <img
            :src="
              require('@/assets/' +
                planet.name.toLowerCase().replaceAll(' ', '-') +
                '.png')
            "
          />
          {{ planet.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListPlanet",
  props: {
    planets: {
      type: Object,
      required: true,
    },
  },
  components: {},
};
</script>

<style></style>
