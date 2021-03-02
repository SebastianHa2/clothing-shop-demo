<template>
    <main-page-container>
        <template v-slot:header-img-1>
            <img src="../../assets/header-man/header-man-1.jpeg" alt="header-man-image">
        </template>
        <template v-slot:header-img-2>
            <img src="../../assets/header-man/header-man-2.jpeg" alt="header-man-2-image">
        </template>
        <template v-slot:trousers>
            <man-jeans></man-jeans>
            <man-bottoms></man-bottoms>
        </template>
        <template v-slot:sweatshirts>
            <man-sweatshirts></man-sweatshirts>
        </template>
    </main-page-container>
</template>

<script>
import MainPageContainer from '../containers/MainPageContainer.vue'
import ManJeans from '../sex-options/man/ManJeans.vue'
import ManBottoms from '../sex-options/man/ManBottoms.vue'
import ManSweatshirts from '../sex-options/man/ManSweatshirts.vue'

export default {
    components: {MainPageContainer, ManJeans, ManBottoms, ManSweatshirts},
    mounted() {
        this.$store.commit('setManOptionTrue')
    }
}
</script>

<style scoped>
    img{
        width: 100%;
        height: 100%;
    }
</style>