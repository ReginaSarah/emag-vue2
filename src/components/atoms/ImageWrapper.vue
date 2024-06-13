<template>
  <v-card :max-height="height" :max-width="width" elevation="2">
    <v-img :src="src" class="grey darken-4" alt="alt">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <v-card-title class="justify-center"> {{ alt }} </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "Image-Wrapper",
  props: {
    src: {
      type: String,
      default: "https://picsum.photos/350/165?random",
    },
    alt: {
      type: String,
      default: "Imagem Aleatória",
    },
    width: {
      type: Number,
      default: 350,
    },
    height: {
      type: Number,
      default: 250,
    },
  },
  computed: {},
};
</script>
