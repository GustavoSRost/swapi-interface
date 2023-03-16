<template>
  <div v-if="loading"></div>
  <section v-else>
    <div v-if="planet.name" class="grid">
      <Div>
        <h1>{{ planet.name }}</h1>
        <ul>
          <li>
            <p>Rotation period: {{ planet.rotation_period }}</p>
          </li>
          <li>
            <p>Orbital period: {{ planet.orbital_period }}</p>
          </li>
          <li>
            <p>Diameter: {{ planet.diameter }}</p>
          </li>
          <li>
            <p>Climate: {{ planet.climate }}</p>
          </li>
          <li>
            <p>Gravity: {{ planet.gravity }}</p>
          </li>
          <li>
            <p>Terrain: {{ planet.terrain }}</p>
          </li>
          <li>
            <p>Surface water: {{ planet.surface_water }}</p>
          </li>
          <li>
            <p>Population: {{ planet.population }}</p>
          </li>
        </ul>
      </Div>
      <div>
        <img
          :src="
            require('@/assets/' + planet.name.toLowerCase().replaceAll(' ', '-') + '.png')
          "
          :alt="planet.name"
        />
      </div>
    </div>
    <div class="movi-section" v-if="planet.name">
      <h2>Movie Images</h2>
      <ul>
        <li>
          <img
            :src="
              require('@/assets/' +
                planet.name.toLowerCase().replaceAll(' ', '-') +
                '2.png')
            "
            :alt="planet.name"
          />
        </li>
        <li>
          <img
            :src="
              require('@/assets/' +
                planet.name.toLowerCase().replaceAll(' ', '-') +
                '3.png')
            "
            :alt="planet.name"
          />
        </li>
        <li>
          <img
            :src="
              require('@/assets/' +
                planet.name.toLowerCase().replaceAll(' ', '-') +
                '4.png')
            "
            :alt="planet.name"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "PlanetInfo",
  props: {
    planet: {
      type: Object,
      required: true,
    },
  },

  components: {},
};
</script>

<style></style>
