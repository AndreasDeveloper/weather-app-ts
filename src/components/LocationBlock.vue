<template>
    <div>
        <h2 class="heading-divider">Result</h2>
        <div class="location-block">
            {{ location }}
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'LocationBlock',
    props: {
        locationData: { type: Object }
    },
    watch: {
        locationData: {
            deep: true,
            handler(val, old) {
                console.log(val, old)
                this.location = val.data;
            }
        }
    },
    data() {
        return {
            location: {}
        };
    },
    methods: {
    }
})
</script>

<style lang="scss" scoped>
@import '@/styles/components/_location-block.scss';
</style>