<!-- Men jeans for main page display -->

<template>
    <div class="shop-jeans">
        <img src="../../../assets/man/trousers/jeans-man.jpeg" alt="">
        <h2>Jeans Collection</h2>
        <div class="shop-now-button">
            <shop-now-button></shop-now-button>
        </div>
    </div>
</template>

<script>
import ShopNowButton from '../../BaseButtons/ShopNowButton.vue'
export default {
    components: {ShopNowButton}
}
</script>

<style lang="scss" scoped>

    .shop-jeans{
        width: 100%;
        height: 110vh;
        padding: 1rem;
        position: relative;

        img{
            width: 100%;
            height: 100%;
        }
    }

    h2{
        font-size: 5rem;
        text-transform: uppercase;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        text-shadow: 0.1rem 0.2rem 0.2rem #000;
    }

    .shop-now-button{
        position: absolute;
        left: 50%;
        transform: translate(-50%,0);
        bottom: 35%;
    }

    @media(max-width: 900px){
        h2{
            font-size: 3.5rem;
        }
    }

    @media(max-width: 700px){
        .shop-jeans{
            height:80vh;
        }
    }

    @media(max-width: 650px){
        h2{
            font-size: 2.5rem;
        }
    }

    @media(max-width: 500px){
        h2{
            font-size: 1.5rem;
        }

        .shop-jeans{
            height: 50vh;
        }
    }
</style>