<!-- Coat items for sale -->

<template>
    <items-container>
        <template v-slot:items>
            <div class="coats">
                <div class="main-coats">
                    <div class="main-coat">
                        <div class="img-1">
                            <img :src="$store.state.mainCoatItems[0].url">
                        </div>
                        <div class="img-2">
                            <img :src="$store.state.mainCoatItems[0].url2">
                        </div>
                        <div class="img-3">
                            <img :src="$store.state.mainCoatItems[0].url3">
                        </div>
                        <div class="price-and-name">
                            <div class="price">{{`£${$store.state.mainCoatItems[0].price}`}}</div>
                            <div class="name">{{$store.state.mainCoatItems[0].name}}</div>
                        </div>
                        <div class="add-to-cart" @click="$store.commit('addItemToCart', $store.state.mainCoatItems[0])">
                            <add-to-cart></add-to-cart>
                        </div>
                    </div>
                    <div class="main-coat">
                        <div class="img-3">
                            <img :src="$store.state.mainCoatItems[1].url2">
                        </div>
                        <div class="img-2">
                            <img :src="$store.state.mainCoatItems[1].url">
                        </div>
                        <div class="img-1">
                            <img :src="$store.state.mainCoatItems[1].url3">
                        </div>
                        <div class="price-and-name">
                            <div class="price">{{`£${$store.state.mainCoatItems[1].price}`}}</div>
                            <div class="name">{{$store.state.mainCoatItems[1].name}}</div>
                        </div>
                        <div class="add-to-cart" @click="$store.commit('addItemToCart', $store.state.mainCoatItems[1])">
                            <add-to-cart></add-to-cart>
                        </div>
                    </div>
                </div>
                <div class="coat-items">
                    <div @mouseenter="showSecondPicture(coat)" @mouseleave="hideSecondPicture(coat)"  class="coat" v-for="coat in $store.state.coatItems" :key="coat.name" @click="$store.commit('addItemToCart', coat)"> 
                        <div class="add-to-cart">
                            <add-to-cart></add-to-cart>
                        </div>
                        <img :src="coat.urlActive">
                        <div class="item-price-and-name">
                            <div class="name">{{coat.name}}</div>
                            <div class="price">{{`£${coat.price}`}}</div>
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
        // Changing the picture on hover methods
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

    /* Main coats styling */

    .coats{
        width: 100%;
        background-color: #d2d4dc;
        padding: 15rem 0;
    }

    .main-coats{
        height: 100vh;
        width: 90%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: auto;
    }

    .main-coat{
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
        z-index: 100;
    }

    /* Showing the image in the back on hover */

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

    /* Coat items */

    .coat-items{
        width: 70%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around
    }

    .coat{
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

        @media(max-width: 1200px){
        .img-1 img{
            right: -5rem;
        }
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

        .coat-items{
            width: 100%;
        }
    }

    @media(max-width: 400px){
        .img-3 img{
            display: none;
        }
    }
    
</style>