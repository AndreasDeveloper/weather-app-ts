<template>
  <div class="home">
    <Header @passFetch="forwardData" @passForecast="forwardForecast" />
    <LocationBlock :locationData="currentWeatherData" :forecastData="forecastWeatherData" />
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
      currentWeatherData: {},
      forecastWeatherData: {}
    };
  },
  methods: {
    forwardData(payload) {
      this.currentWeatherData = payload;
    },
    forwardForecast(payload) {
      this.forecastWeatherData = payload;
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin-bottom: 40px;
}
</style>