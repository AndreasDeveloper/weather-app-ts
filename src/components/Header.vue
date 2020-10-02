<template>
  <header class="header">
    <div class="header__container">
      <ion-icon class="header__container__icon" name="cloud-outline"></ion-icon>
      <span>- type weather -</span>
      <h1>Search by city or town name</h1>
      <h2>covering cities all around the globe</h2>
      <form>
        <input type="text" name="search" placeholder="Search cities and towns.." v-model="query" @input="autocomplete" required>
        <ul v-show="switchUl">
          <li v-for="(location, index) in locations" :key="index" @click="getCurrentWeather">{{ location.name }}</li>
        </ul>
        <button class="btn" type="submit" @click.prevent="getCurrentWeather" :disabled="searchState">{{ searchState ? 'searching..' : 'search' }}</button>
      </form>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'Header',
  data() {
    return {
      query: '',
      searchState: false,
      locations: [],
      switchUl: false
    };
  },
  methods: {
    ...mapActions([
      'getSearchAutocomplete'
    ]),

    async getCurrentWeather() {
      this.searchState = true;
      try {
        const formatQ = this.query.split(' ').join('%');
        const currentW = await this.$store.dispatch('getCurrentWeather', formatQ);
        console.log(currentW.data)
        this.$emit('passFetch', currentW);
        this.searchState = false;
        this.switchUl = false;
      } catch (err) {
        console.log(err);
        this.searchState = false;
      }
    },
    async autocomplete() {
      try {
        if (this.query === '') {
          this.locations = [];
        }
        const formatQ = this.query.split(' ').join('%');
        const dataLocs = await this.getSearchAutocomplete(formatQ);
        this.switchUl = true;
        this.locations = dataLocs.data;
        console.log(this.locations)
      } catch (err) {
        console.log(err);
      }
    }
  }
});
</script>

<style scoped lang="scss">
@import '@/styles/pages/_header.scss';
@import '@/styles/components/_buttons.scss';
</style>
