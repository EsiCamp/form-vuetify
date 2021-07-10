<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import "../node_modules/@aasaam/noto-font/dist/font-face.css";

  body {
    font-family: "aasaam-Noto";
  }
  .v-btn,
  .v-text-field,
  .v-input__control {
    font-family: "aasaam-Noto";
  }
</style>
