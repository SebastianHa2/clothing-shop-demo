<!-- Men sweatshirts for main page display -->

<template>
    <div class="heading">
    <base-heading>
        <template v-slot:heading>
            Check out our newest sweatshirts
        </template>
    </base-heading>
    </div>
    <div class="sweatshirts-container">
        <div class="sweatshirt sweat-1">
            <img src="../../../assets/man/sweatshirts/sweatshirts-main-man.jpeg" alt="">
        </div>
        <div class="sweatshirt horizontal sweat-2">
            <img src="../../../assets/man/sweatshirts/sweatshirts-main-man-3.jpeg" alt="">
        </div>
        <div class="sweatshirt sweat-3">
            <img src="../../../assets/man/sweatshirts/sweatshirts-main-man-2.jpeg" alt="">
        </div>
        <shop-now-button class="shop-now-button"></shop-now-button>
    </div>
</template>

<style lang="scss" scoped>

    .sweatshirts-container{
        width: 100%;
        height: 85vh;
        display: flex;
        position: relative;
        align-items: center;
    }

    .sweat-1{
        position: absolute;
        left: 5%;
    }

    .sweat-2{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 20;
    }

    .sweat-3{
        position: absolute;
        right: 5%;
    }

    .sweatshirt img{
        width: 40rem;
        border: 0.1rem solid #000;
    }

    .horizontal img{
        width: 60rem;
    }

    .shop-now-button{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 30;
        border: 0.2rem solid #000;
        color: #000;
    }

    @media(max-width: 1300px){
        .horizontal img{
            width: 40rem
        }
    }

    @media(max-width: 1050px){
        .horizontal img{
            width: 35rem;
        }
    }

    @media(max-width: 950px){
        .horizontal img{
            display: none;
        }

    }

    @media(max-width: 900px){
        .sweatshirt img{
            width: 35rem;
        }
    }

    @media(max-width: 750px){
        .sweatshirt img{
            width: 30rem;
        }
    }

    @media(max-width: 650px){
        .sweatshirt img{
            width: 25rem;
        }
    }

    @media(max-width: 600px){
        .sweat-1{
            display: none;
        }

        .sweat-3{
            right: 0;
            left: 50%;
            width: 100%;
            display: flex;
            justify-content: center;

            transform: translateX(-50%);

            img{
                width: 40rem;
            }
        }
    }

    @media(max-width: 450px){
        .sweat-3{
            img{
                width: 30rem;
            }
        }

        .sweatshirts-container{
            height: 65vh;
        }
    }
</style>