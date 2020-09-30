<template>
  <header class="header">
    <div class="header__container">
      <ion-icon class="header__container__icon" name="cloud-outline"></ion-icon>
      <span>- type weather -</span>
      <h1>Search by city or town name</h1>
      <h2>covering cities all around the globe</h2>
      <form>
        <input type="text" name="search" placeholder="Search cities and towns.." v-model="query" required>
        <button class="btn" type="submit" @click.prevent="getCurrentWeather">search</button>
      </form>
    </div>
  </header>
</template>

<script lang="ts">
import { ActionTypes } from '../store/action-types';
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'Header',
  data() {
    return {
      query: null
    };
  },
  methods: {
    async getCurrentWeather() {
      await this.$store.dispatch(ActionTypes.GET_CURRENT_WEATHER);
    },
  }
});
</script>

<style scoped lang="scss">
@import '@/styles/pages/_header.scss';
@import '@/styles/components/_buttons.scss';
</style>
