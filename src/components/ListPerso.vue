<template>
  <div id="personagem-list-cp">
    <ul>
      <li
        v-for="(person, key) in people.results"
        :key="person.name + key"
        :class="person.name.toLowerCase().replaceAll(' ', '-')"
      >
        <router-link
          :to="{
            name: 'person',
            params: { id: person.name.toLowerCase().replaceAll(' ', '-') },
          }"
        >
          <img
            :src="
              require('@/assets/' +
                person.name.toLowerCase().replaceAll(' ', '-') +
                '.png')
            "
          />
          {{ person.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListPerso",
  props: {
    people: {
      type: Object,
      required: true,
    },
  },
  components: {},
};
</script>

<style></style>
