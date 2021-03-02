<template>
    <items-container>
        <template v-slot:items>
            <div class="sweatshirts">
                <div class="main-sweatshirts">
                    <div class="main-sweatshirt">
                        <div class="img-1">
                            <img :src="$store.state.mainSweatshirtItems[0].url">
                        </div>
                        <div class="img-2">
                            <img :src="$store.state.mainSweatshirtItems[0].url2">
                        </div>
                        <div class="img-3">
                            <img :src="$store.state.mainSweatshirtItems[0].url3">
                        </div>
                        <div class="price-and-name">
                            <div class="price">{{`£${$store.state.mainSweatshirtItems[0].price}`}}</div>
                            <div class="name">{{$store.state.mainSweatshirtItems[0].name}}</div>
                        </div>
                        <div class="add-to-cart" @click="$store.commit('addItemToCart', $store.state.mainSweatshirtItems[0])">
                            <add-to-cart></add-to-cart>
                        </div>
                    </div>
                    <div class="main-sweatshirt">
                        <div class="img-3">
                            <img :src="$store.state.mainSweatshirtItems[1].url2">
                        </div>
                        <div class="img-2">
                            <img :src="$store.state.mainSweatshirtItems[1].url">
                        </div>
                        <div class="img-1">
                            <img :src="$store.state.mainSweatshirtItems[1].url3">
                        </div>
                        <div class="price-and-name">
                            <div class="price">{{`£${$store.state.mainSweatshirtItems[1].price}`}}</div>
                            <div class="name">{{$store.state.mainSweatshirtItems[1].name}}</div>
                        </div>
                        <div class="add-to-cart" @click="$store.commit('addItemToCart', $store.state.mainSweatshirtItems[1])">
                            <add-to-cart></add-to-cart>
                        </div>
                    </div>
                </div>
                <div class="sweatshirt-items">
                    <div @mouseenter="showSecondPicture(sweatshirt)" @mouseleave="hideSecondPicture(sweatshirt)"  class="sweatshirt" v-for="sweatshirt in $store.state.sweatshirtsItems" :key="sweatshirt.name" @click="$store.commit('addItemToCart', sweatshirt)">
                        <div class="add-to-cart">
                            <add-to-cart></add-to-cart>
                        </div>
                        <img :src="sweatshirt.urlActive">
                        <div class="item-price-and-name">
                            <div class="name">{{sweatshirt.name}}</div>
                            <div class="price">{{`£${sweatshirt.price}`}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </items-container>
</template>

<script>
export default {
    methods: {
        showSecondPicture(coat) {
            coat.urlActive = coat.url2
            
        },
        hideSecondPicture(coat) {
            coat.urlActive = coat.url
        }
    },
    mounted() {
        this.$store.commit('setManOptionTrue')
    }
}
</script>

<style lang="scss" scoped>

    /* Main sweatshirts */

    .sweatshirts{
        width: 100%;
        background-color: #d2d4dc;
        padding: 15rem 0;
    }

    .main-sweatshirts{
        height: 100vh;
        width: 90%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: auto;
    }

    .main-sweatshirt{
        width: 30%;
        height: 80%;
        position: relative;

        img{
            position: absolute;
            transition: all 0.5s;

            &:hover{
                cursor: pointer;
                z-index: 25;
                opacity: 1;
            }
        }
    }
    

    .add-to-cart{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 90;
    }

    .img-1 img{
        right: 0;
        top: 0;
        width: 20rem;
        opacity: 0.6
    }

    .img-2 img{
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 30rem;
        z-index: 20;
    }

    .img-3 img{
        width: 15rem;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0.6;
        left: -5rem;
    }

    .price-and-name{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform:translateX(-50%);
        font-size: 2rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #000;
    }

    /* Sweatshirt items */

    .sweatshirt-items{
        width: 70%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around
    }

    .sweatshirt{
        width: 25rem;
        height: 35rem;
        margin: 4rem;
        position: relative;

        img{
            height: 100%;
            width: 100%;
        }
    }

    .item-price-and-name{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.5rem;
    }

 /* Media queries */

    @media(max-height: 700px){
        .price-and-name{
            bottom: -2rem;
        }
    }

    @media(max-height: 650px){
        .price-and-name{
            bottom: -4rem;
        }
    }

    @media(max-width: 1200px){
        .img-1 img{
            right: -5rem;
        }
    }

    @media(max-width: 950px){
        .main-sweatshirts{
            flex-direction: column;
            height: 200vh;
        }

        .price-and-name{
            bottom: 4rem;
        }

        .img-3 img{
            left: -10rem;
        }

        .img-1 img{
            right: -10rem;
        }
    }

    @media(max-width: 600px){
        .img-3 img{
            left: -15rem;
        }

        .img-1 img{
            right: -15rem;
        }

        .price-and-name{
            width: 30rem;
        }
    }
    
    @media(max-width: 450px){
        .img-3 img{
            left: -12rem;
        }

        .img-1 img{
            right: -12rem;
        }

        .sweatshirt-items{
            width: 100%;
        }
    }

    @media(max-width: 400px){
        .img-3 img{
            display: none;
        }

    }
</style>