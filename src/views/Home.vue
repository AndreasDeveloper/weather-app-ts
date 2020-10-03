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
  metaInfo: {
      title: 'Type Weather',
      meta: [
      { name: 'description', content: 'Check the weather for all of the cities and towns across the globe.' },
      { name: 'author', content: 'AndreasDEV' },
      { name: "og:title", property: "og:title", content: "Type Weather" },
      { name: "og:type", property: "og:type", content: "website" },
      { name: "og:description", property: "og:description", content: "Check the weather for all of the cities and towns across the globe." },
    ]
  },
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