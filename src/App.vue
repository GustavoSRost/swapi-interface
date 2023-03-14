<template>
  <div id="page">
    <Header-component />
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer-component />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header.vue";
import FooterComponent from "@/components/Footer.vue";
export default {
  name: "App",
  props: {},
  components: {
    HeaderComponent,
    FooterComponent,
  },
  methods: {
    addBodyClass() {
      const routeName = this.$route.name;
      document.body.className = "";
      if (this.$route.params.id != undefined) {
        document.body.classList.add(this.$route.params.id + "-" + routeName);
      } else {
        document.body.classList.add(routeName);
      }
    },
  },
  watch: {
    $route() {
      this.addBodyClass();
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap");
@import url(@/css/estilo.css);
</style>
