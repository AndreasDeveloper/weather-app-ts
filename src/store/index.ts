import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentWeather: {},
    forecastData: {}
  },
  mutations: {
    SET_CURRENT(state, data) {
      state.currentWeather = data;
    },
    SET_FORECAST(state, data) {
      state.forecastData = data;
    }
  },
  actions: {
    async getCurrentWeather({ commit }, query: string) {
      try {
        const resp = await axios({ url: `http://api.weatherapi.com/v1/current.json?key=715b8611732e4755ad1164722203009&q=${query}`, method: 'GET' });
        if (resp.request.status !== 200) {
          console.log('Error ocurred');
          return;
        }
        commit('SET_CURRENT', resp.data);
        return resp;
      } catch (err) {
        console.log(err);
      }
    },
    async getSearchAutocomplete(obj, query: string) {
      try {
        const resp = await axios({ url: `http://api.weatherapi.com/v1/search.json?key=715b8611732e4755ad1164722203009&q=${query}`, method: 'GET' });
        if (resp.request.status !== 200) {
          console.log('Error ocurred');
          return;
        }
        return resp;
      } catch (err) {
        console.log(err);
      }
    },
    async getForecastData({ commit }, query: string) {
      try {
        const resp = await axios({ url: `http://api.weatherapi.com/v1/forecast.json?key=715b8611732e4755ad1164722203009&q=${query}&days=3`, method: 'GET' });
        if (resp.request.status !== 200) {
          console.log('Error ocurred');
          return;
        }
        commit('SET_FORECAST', resp.data);
        return resp;
      } catch (err) {
        console.log(err);
      }
    }
  },
  modules: {
  }
})
