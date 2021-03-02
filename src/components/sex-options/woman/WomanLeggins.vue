<!-- Women leggins for main page display -->

<template>
    <base-heading>
        <template v-slot:heading>
            different colour leggins
        </template>
    </base-heading>
    <div class="leggins">
        <div class="leggins-pair">
            <img src="../../../assets/woman/trousers/leggins-1.jpg" alt="">
        </div>
        <div class="leggins-pair">
            <img src="../../../assets/woman/trousers/leggins-2.jpg" alt="">
        </div>
        <div class="leggins-pair">
            <img src="../../../assets/woman/trousers/leggins-3.jpg" alt="">
        </div>
        <div class="leggins-pair">
            <img src="../../../assets/woman/trousers/leggins-4.jpg" alt="">
        </div>
    </div>
</template>

<script>
import BaseHeading from '../../BaseHeadings/BaseHeading.vue'
export default {
    components: {BaseHeading}
}
</script>

<style lang="scss" scoped>

    .leggins{
        width: 100%;
        height: 40vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10rem;
    }

    .leggins-pair{
        width: 30rem;
        perspective: 50rem;

        img{
            width: 100%;
            transform: translateZ(-30rem);
            transition: all 0.4s;
            border-radius: 1rem;

            &:hover{
                transform: translateZ(-20rem);
                cursor: pointer;
            }
        }
    }

    /*Media queries */

    @media(max-width: 950px){
        .leggins{
            flex-wrap: wrap;
            height: auto;
            justify-content: center;
        }
    }

</style>