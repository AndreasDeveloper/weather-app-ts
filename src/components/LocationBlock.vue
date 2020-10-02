<template>
    <div v-if="location.location">
        <h2 class="heading-divider">Result</h2>
        <div class="location-block">
            <div class="location-block__content" :style="{ 'background-image': `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), ${image}` }">
                <div>
                    <h2>{{ location.location.name }}</h2>
                    <h3>{{ location.location.country }}</h3>
                    <span>{{ date }}. </span>
                    <span>{{ time }}</span>
                    <div class="location-block__content__weather-text">
                        <ion-icon class="icon" name="sunny-outline" v-if="icon === 'sun'"></ion-icon>
                        <ion-icon class="icon" name="cloud-outline" v-if="icon === 'cloud'"></ion-icon>
                        <ion-icon class="icon" name="rainy-outline" v-if="icon === 'rain'"></ion-icon>
                        <h2>{{ location.current.condition.text }}</h2>
                    </div>
                    <h3 class="location-block__content__temp">{{ location.current.temp_c }} &deg;C <span>| Feels like</span> {{ location.current.feelslike_c }} &deg;C</h3>
                    <div class="location-block__content__phw">
                        <h4>Percipitation: {{ location.current.precip_mm }}%</h4>
                        <h4>Humidity: {{ location.current.humidity }}%</h4>
                        <h4>Wind: {{ location.current.wind_kph }} km/h</h4>
                    </div>
                </div>
                <p class="location-block__content__last-update">Last updated {{ lastUpdtDate }}</p>
            </div>
            <div class="location-block__data">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

// Intefrace for fetched data objects
interface LocationInterface {
    data: {
        current: {
            condition: {
                text: string;
            };
            last_updated: string;
        };
        location: {
            localtime: string;
        };
    };
}

export default Vue.extend({
    name: 'LocationBlock',
    props: {
        locationData: { type: Object as () => LocationInterface }
    },
    watch: {
        locationData: {
            deep: true,
            handler(val) {
                this.location = val.data;
                this.formatDate(val);
                this.setImageIcon(val);
            }
        }
    },
    data() {
        return {
            location: {},
            date: '',
            lastUpdtDate: '',
            time: '',
            image: '',
            icon: ''
        };
    },
    methods: {
        formatDate(val: LocationInterface) {
            // Date
            const newDate = val.data.location.localtime.split('-').join('.').split(' ');
            this.date = newDate[0];
            this.time = newDate[1];
            // Last updated
            const newUpdt = val.data.current.last_updated.split('-').join('.');
            this.lastUpdtDate = newUpdt;
        },
        setImageIcon(val: LocationInterface) {
            const image = val.data.current.condition.text.toLowerCase().split(' ').join('');
            console.log(image)
            if (image === 'partlycloudy') {
                this.image = `url(${require(`@/assets/overcast.jpg`)})`;
                this.icon = 'cloud';
            } else if (image === 'rain' || image === 'lightrain') {
                this.image = `url(${require(`@/assets/rain.jpg`)})`;
                this.icon = 'rain';
            } else if (image === 'sunny' || image === 'clear') {
                this.image = `url(${require(`@/assets/sunny.jpg`)})`;
                this.icon = 'sun';
            }
        },
    }
})
</script>

<style lang="scss" scoped>
@import '@/styles/components/_location-block.scss';
</style>