<template>
  <img :src="photo" :alt="altPhoto" />
</template>

<script>
export default {
  name: "PhotoComponent",
  props: {
    src: {
      type: String,
      required: true,
    },
    altPhoto: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
