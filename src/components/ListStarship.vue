<template>
  <main>
    <div v-if="starships">
      <swiper
        :modules="modules"
        navigation
        :freeMode="false"
        :slidesPerView="3"
        :spaceBetween="70"
        :loop="true"
      >
        <swiper-slide
          v-for="(starship, key) in starships.results"
          :key="starships.name + key"
        >
          <router-link
            :to="{
              name: 'starship',
              params: { id: starship.name.toLowerCase().replaceAll(' ', '-') },
            }"
          >
            <img
              :src="
                require('@/assets/' +
                  starship.name.toLowerCase().replaceAll(' ', '-') +
                  '.png')
              "
              :alt="starship.name"
              style="max-width: 100%"
            />
            {{ starship.name }}
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
    <div class="starships-desc">
      <p>
        In the vast expanse of the Star Wars galaxy, starships play a crucial role in the
        ongoing conflict between the light and dark sides of the Force. From nimble
        fighters to massive capital ships, these vessels are crewed by brave pilots and
        skilled engineers who risk their lives to defend their cause.
      </p>
      <p>
        As a pilot or crew member aboard a Star Wars starship, you'll face constant danger
        as you navigate through treacherous asteroid fields, engage in high-stakes
        dogfights, and battle against formidable enemies. You'll need to work closely with
        your fellow crew members to ensure that your ship operates smoothly, whether
        you're in the heat of battle or navigating through hyperspace.
      </p>
    </div>
    <router-link :to="{ name: 'home' }">Back to Home</router-link>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation } from "swiper";

import "swiper/swiper-bundle.css";
export default {
  name: "ListStarship",
  props: {
    starships: {
      type: Object,
      required: true,
    },
  },
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [FreeMode, Navigation],
    };
  },
};
</script>

<style></style>
