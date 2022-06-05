<template>
  <v-app>
    <v-main>
      <v-row class="mt-4 ml-2">
        <v-col
          cols="12"
          md="4"
          class="pt-0"
          v-for="item in items"
          :key="item.id"
        >
          <div>
            <Card
              :id="item.id"
              :title="item.title"
              :content="item.content"
              :icon="item.icon"
              :buttonName="item.buttonName"
              :pathName="item.pathName"
              :stats="item.stats"
            />
          </div>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "./components/Card.vue";

export default defineComponent({
  name: "App",
  setup() {
    return {
      msg: "Hello, World !",
      items: [
        {
          id: 1,
          title: "Title Card 1",
          content: "Content Card 1",
          icon: "mdi-account-group",
          stats: 15,
          buttonName: "Button Test 1",
          pathName: "/",
        },
        {
          id: 2,
          title: "Title Card 2",
          content: "Content Card 2",
          icon: "mdi-account-group",
          stats: 25,
          buttonName: "Button Test 2",
          pathName: "/",
        },
        {
          id: 3,
          title: "Title Card 3",
          content: "Content Card 3",
          icon: "mdi-account-group",
          stats: 35,
          buttonName: "Button Test 3",
          pathName: "/",
        },
      ],
    };
  },
  components: { Card },
});
</script>
