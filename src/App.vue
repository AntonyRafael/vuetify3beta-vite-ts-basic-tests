<template>
  <v-app>
    <v-main>
      <h1>{{ msg }}</h1>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    return {
      msg: "Hello, World !"
    };
  }
});
</script>
