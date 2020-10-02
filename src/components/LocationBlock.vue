<template>
    <div v-if="location.location">
        <h2 class="heading-divider">Result</h2>
        <div class="location-block">
            <div class="location-block__content">
                <h2>{{ location.location.name }}</h2>
                <h3>{{ location.location.country }}</h3>
                <span>{{ date }}.</span>
                <span>{{ time }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

// Intefrace for fetched data objects
interface LocationInter {
    data: {
        current: object;
        location: {
            localtime: string;
        };
    };
}

export default Vue.extend({
    name: 'LocationBlock',
    props: {
        locationData: { type: Object as () => LocationInter }
    },
    watch: {
        locationData: {
            deep: true,
            handler(val) {
                this.location = val.data;
                this.formatDate(val);
            }
        }
    },
    data() {
        return {
            location: {},
            date: '',
            time: ''
        };
    },
    methods: {
        formatDate(val: LocationInter) {
            const newDate = val.data.location.localtime.split('-').join('.').split(' ');
            this.date = newDate[0];
            this.time = newDate[1];
        }
    }
})
</script>

<style lang="scss" scoped>
@import '@/styles/components/_location-block.scss';
</style>