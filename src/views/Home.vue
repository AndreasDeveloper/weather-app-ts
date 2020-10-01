<template>
  <div class="home">
    <Header @passFetch="forwardData" />
    <LocationBlock :locationData="currentWeatherData" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header';
import LocationBlock from '@/components/LocationBlock';

export default {
  name: 'Home',
  components: {
    Header,
    LocationBlock
  },
  data() {
    return {
      currentWeatherData: {}
    };
  },
  methods: {
    forwardData(payload) {
      this.currentWeatherData = payload;
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin-bottom: 40px;
}
</style>