<!-- Men bottoms cuts for main page display -->

<template>
    <div class="slides-wrapper">
        <vueper-slides class="no-shadow"  :arrows-outside="true" :bullets="false" :visible-slides="4" :slide-ratio="1 / 2.5" :gap="2" :dragging-distance="100">
            <template v-slot:arrow-left>
                <i class="fas fa-arrow-left"></i>
            </template>
            <template v-slot:arrow-right>
                <i class="fas fa-arrow-right"></i>
            </template>
            <vueper-slide v-for="slide in slides" :key="slide.id" :image="slide.image">
                <template v-slot:content>
                    <div class="title">{{slide.title}}</div>
                    <div class="shop-now-button">
                        <shop-now-button></shop-now-button>
                    </div>
                </template>
            </vueper-slide>
        </vueper-slides>
    </div>
</template>

<script>

// Trying out the vueperslides library for slides
import {VueperSlides, VueperSlide} from 'vueperslides'
import ShopNowButton from '../../BaseButtons/ShopNowButton.vue'
import '../../../../node_modules/vueperslides/dist/vueperslides.css'

export default {
    components: {VueperSlides, VueperSlide, ShopNowButton},
    data() {
        return {
            slides: [
                {
                    id: 'slide-1',
                    title: "superskinny",
                    image: require('../../../assets/man/trousers/superskinny-man.jpg'),
                },
                {
                    id: 'slide-2',
                    title: "skinnyfit",
                    image: require('../../../assets/man/trousers/skinnyfit-man.jpg')
                },
                {
                    id: 'slide-3',
                    title: "carrot cut",
                    image: require('../../../assets/man/trousers/carrot-man.jpg')
                },
                {
                    id: 'slide-4',
                    title: "slim",
                    image: require('../../../assets/man/trousers/slim-man.jpg')
                },
                {
                    id: 'slide-5',
                    title: "relaxed",
                    image: require('../../../assets/man/trousers/relaxed-man.jpg')
                },
                {
                    id: 'slide-6',
                    title: "regular",
                    image: require('../../../assets/man/trousers/regular-man.jpg')
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

    .slides-wrapper{
        padding: 0.4rem;
        overflow: hidden;
    }

    /* Vueper slides styling */

    .vueperslides{
        color: #fff;
        font-size: 3rem;
    }


    .vueperslides__bullet span {
    display: block;
    color: #000;
    font-size: 10px;
    opacity: 0.8;
    }

    .title{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        text-align:center;
    }

    .fa-arrow-left{
        position: absolute;
        color: #fff;
        font-size: 4rem;
        z-index: 30;
        left: 15rem;
    }

    .fa-arrow-right{
        position: absolute;
        color: #fff;
        font-size: 4rem;
        z-index: 30;
        right: 15rem;
    }

    .shop-now-button{
        color: red;
        position: absolute;
        left: 50%;
        bottom: 1rem;
        transform: translate(-50%);
    }

    @media(max-width: 900px){
        .title{
            font-size: 1.7rem;
        }
    }

    @media(max-width: 800px){
        .vueperslide{
            width: 100%;
        }
    }

    @media(max-width: 550px){
        .fa-arrow-left{
            font-size: 3rem;
            transform: translateY(-50%);
        }
        

        .fa-arrow-right{
            font-size: 3rem;
            z-index: 30;
            right: 15rem;
            transform: translateY(-50%);
        }
    }
</style>