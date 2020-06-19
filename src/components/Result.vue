<template>
  <v-card class="mx-auto" max-width="344">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

    <v-card-title>Thunderstorm Prediction</v-card-title>

    <v-card-subtitle>For the next three hours</v-card-subtitle>

    <v-expand-transition>
      <div v-show="res.ok">
        <v-divider></v-divider>

        <v-card-text
          v-if="res.data.prediction === 1"
        >there is going to be a thunderstorm between {{res.data.start_time}} and {{res.data.end_time}}</v-card-text>
        <v-card-text
          v-if="res.data.prediction === 0"
        >there wont be a thunderstorm between {{res.data.start_time}} and {{res.data.end_time}}</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "Result",
  props: {
    res: {
      type: Object
    }
  },
  data: () => ({})
};
</script>

<style scoped>
</style>