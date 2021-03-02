<template>
    <main-page-container>
        <template v-slot:header-img-1>
            <img src="../../assets/header-woman/header-woman-1.jpg" alt="">
        </template>
        <template v-slot:header-img-2>
            <img src="../../assets/header-woman/header-woman-2.jpg" alt="">
        </template>

        <template v-slot:trousers>
            <woman-jeans></woman-jeans>
            <woman-leggins></woman-leggins>
        </template>
        <template v-slot:dresses>
            <woman-dresses></woman-dresses>
        </template>
    </main-page-container>
</template>

<script>
import MainPageContainer from '../containers/MainPageContainer.vue'
import WomanJeans from './woman/WomanJeans.vue'
import WomanLeggins from './woman/WomanLeggins.vue'
import WomanDresses from './woman/WomanDresses.vue'
export default {
    components: {MainPageContainer, WomanJeans, WomanLeggins, WomanDresses},
    mounted() {
        this.$store.commit('setManOptionFalse')
    }
}
</script>

<style scoped>
    img{
        width: 100%;
        height: 100%;
    }
</style>