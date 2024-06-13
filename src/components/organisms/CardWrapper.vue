<template>
  <v-card class="pa-5 card-wrapper">
    <slot />
  </v-card>
</template>
<script>
export default {
  name: "CardPadrao",
};
</script>
<style>
.card-wrapper {
  background-color: #d9deea !important;
}
</style>