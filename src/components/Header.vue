<template>
  <header class="header">
    <div class="header__container">
      <h1>Search by city or town name</h1>
      <h2>covering cities all around the globe</h2>
      <form>
        <input type="text" name="search" placeholder="Search cities and towns.." required>
      </form>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
});
</script>

<style scoped lang="scss">
@import '@/styles/pages/_header.scss';
</style>
