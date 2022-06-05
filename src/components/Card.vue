<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card class="pa-2 mb-2" v-bind="props" :elevation="isHovering ? 24 : 8">
      <v-list-item lines="three">
        <v-list-item-content>
          <p class="text-overline mb-4" :title-test="title">
            {{ title }}
          </p>
          <v-list-item-title class="text-h4 mb-1" :stats-test="stats">
            {{ stats }}
          </v-list-item-title>
          <v-list-item-subtitle :content-test="content">
            {{ content }}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-spacer />

        <template v-slot:append>
          <v-list-item-avatar end class="mt-4">
            <v-icon :icon="icon" size="x-large" :iconName-test="icon" />
          </v-list-item-avatar>
        </template>
      </v-list-item>

      <v-card-actions>
        <v-btn
          :to="pathName"
          color="dark"
          variant="text"
          tabindex="0"
          :buttonName-test="buttonName"
        >
          {{ buttonName }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    id: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    buttonName: {
      type: String,
      default: "",
    },
    pathName: {
      type: String,
      default: "",
    },
    stats: {
      type: Number,
      default: 0,
    },
  },
});
</script>
