<template>
  <div>
    <ul>
      <li v-for="(starship, key) in starships.results" :key="starships.name + key">
        <router-link
          :to="{
            name: 'starship',
            params: { id: starship.name.toLowerCase().replaceAll(' ', '-') },
          }"
        >
          {{ starship.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListStarship",
  props: {
    starships: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
