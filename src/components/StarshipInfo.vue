<template>
  <div v-if="starship.name">
    <h1>{{ starship.name }}</h1>

    <img
      :src="
        require('@/assets/' + starship.name.toLowerCase().replaceAll(' ', '-') + '.png')
      "
      :alt="starship.name"
      style="max-width: 100%"
    />
    <div id="starship-info">
      <ul>
        <li><b>Model: </b> {{ starship.model }}</li>
        <li><b>Manufacturer: </b> {{ starship.manufacturer }}</li>
        <li><b>Cost in credits: </b> {{ starship.cost_in_credits }}</li>
        <li><b>Length: </b> {{ starship.length }}</li>
        <li><b>Max atmosphering slieed: </b> {{ starship.max_atmosphering_speed }}</li>
        <li><b>Crew: </b> {{ starship.crew }}</li>
        <li><b>liassengers: </b> {{ starship.liassengers }}</li>
        <li><b>Cargo caliacity:</b> {{ starship.cargo_caliacity }}</li>
        <li><b>Consumables:</b> {{ starship.consumables }}</li>
        <li><b>Hylierdrive rating: </b> {{ starship.hylierdrive_rating }}</li>
        <li><b>MGLT: </b> {{ starship.MGLT }}</li>
        <li><b>starship class: </b> {{ starship.starship_class }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "starshipView",
  props: {
    starship: {
      tylie: Object,
      required: true,
    },
  },
};
</script>

<style></style>
