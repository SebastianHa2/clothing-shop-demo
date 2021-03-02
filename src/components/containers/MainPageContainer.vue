<!-- Main page template -->

<template>
<!-- Search and cart options showing -->
    <transition name="show-element">
        <search-container v-if="showElement === 'search'"></search-container>
    </transition>
    <transition name="show-element">
        <cart-container v-if="showElement === 'cart'"></cart-container>
    </transition>
    <transition name="show-element">
        <sign-in-container v-if="showElement === 'sign-in'"></sign-in-container>
    </transition>
    <header>
        <!-- Logo, slots for background images, icons -->
        <div class="main">
            <div class="logo">
                <h1>Mechanical</h1>
            </div>
            <div class="header-img">
                <slot name="header-img-1"></slot>
            </div>
            <div class="header-img header-img-display">
                <slot name="header-img-2"></slot>
            </div>
            <h3 class="new-arrivals">New Arrivals</h3>
            <nav-container></nav-container>
            <div class="icons" :class="{colorChange: colorChange}">
                <div class="search" @click="show('search')">
                    <i class="fas fa-search"></i>
                    <p>SEARCH</p>
                </div>
                <i class="fas fa-user" @click="show('sign-in')"></i>
                <div class="cart">
                    <i class="fas fa-shopping-cart" @click="show('cart')"></i>
                    <div v-if="$store.state.cart.length >= 1" class="number-of-items-in-cart" @click="show('cart')">
                        {{$store.state.cart.length}}
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Promotions under header and slots for main page options -->
        <div class="promotions">
            <div class="promotion promotion-1">
                <h2><span>GET</span> 10% OFF STUDENT UNIDAYS DISCOUNT</h2>
            </div>
            <div class="promotion promotion-2">
                <h2>Spring Sale</h2>
            </div>
        </div>
        <section class="trousers">
            <slot name="trousers"></slot>
        </section>
        <section class="dresses">
            <slot name="dresses"></slot>
        </section>
        <section class="sweatshirts">
            <slot name="sweatshirts"></slot>
        </section>
        <section class="community">
            <!-- Community section -->
            <community-container></community-container>
        </section>
        <section class="newsletter">
            <!-- Newsletter section -->
            <newsletter-container></newsletter-container>
        </section>
        <!-- Footer -->
        <footer-container></footer-container>
</template>

<script>
import { gsap } from "gsap";
import NavContainer from './NavContainer.vue'
import CommunityContainer from './CommunityContainer'
import NewsletterContainer from './NewsletterContainer'
import FooterContainer from './FooterContainer'

export default {
    components: {NavContainer, CommunityContainer, NewsletterContainer, FooterContainer},
    data() {
        return{
            colorChange: false,
            showElement: '',
            overflowHidden: false,
        }
    },
    methods: {
        // Changing colour on scroll
        onScroll() {
            const scrollPosition = window.pageYOffset
            if(scrollPosition > 1300){
                this.colorChange = true
            }else{
                this.colorChange = false;
            }
        },
        // Show/Hide methods for pop up elements
        show(element) {
            this.showElement = element
            document.body.style.overflow = "hidden"
        },
        hide() {
            this.showElement = ''
            document.body.style.overflow = "visible"
        }
    },
    // providing the methods to their components
    provide() {
        return{
            hide: this.hide,
            show: this.show
        }
    },
    // animation and scroll event listener
    mounted() {
        gsap.to("h3", {rotate: 360, duration: 1.5})
        window.addEventListener("scroll", this.onScroll)
    }
}
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500&display=swap');

    /* Header styling */

    .main{
        width: 100%;
        height: 100vh;
        display: flex;
        position: relative;
    }

    .header-img{
        width: 50%;
        height: 100%;
    }

    .logo{
        position: absolute;
        top: 5rem;
        left: 50%;
        transform: translate(-50%);
        font-family: 'Bebas Neue', cursive;
        text-transform: uppercase;
        font-size: 3rem;
        color: #fff;
        letter-spacing: 0.2rem;
    }

    .new-arrivals{
        position: absolute;
        bottom: 15%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 4rem;
        text-transform: uppercase;
        color: #fff;
    }

    .new-arrivals:hover{
        cursor: pointer;
    }

    /* Promotions under header styling */

    .promotions{
        width: 100%;
        height: 15vh;
        display: flex;
        justify-content: center;
        padding-top: 1rem;
    }

    .promotion{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .promotion-1{
        width: 50%;
    }

    .promotion-2{
        width: 40%;
        background: url('../../assets/promotions-bg/flowers.jpeg') center no-repeat;

        h2{
            color: #fff;
            text-shadow: 0.1rem 0.2rem 0.3rem #000;
        }

        &:hover{
            cursor: pointer;
        }
    }

    .promotions h2{
        font-size: 2.5rem;
        font-family: 'Raleway', sans-serif;
        text-transform: uppercase;

        span{
            font-family: 'Raleway', sans-serif;
            font-weight: 300;
            font-size: 5rem;
        }
    }


    /* Icons styling */

    .icons{
        position: fixed; 
        top: 2rem;
        right: 2rem;
        height: 4rem;
        width: 40rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        z-index: 100;

        i{
            font-size: 2rem;
            color: #fff;

            &:hover{
                cursor: pointer;
            }
        }

        .cart{
            position: relative;

            .number-of-items-in-cart{
                position: absolute;
                right: -0.8rem;
                bottom: -0.8rem;
                height: 1.5rem;
                width: 1.5rem;
                font-size: 1.2rem;
                background-color: red;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                border-radius: 50%;

                &:hover{
                    cursor: pointer;
                }
            }
        }
    }

    .search{
        display: flex;
        font-size: 1.5rem;
        align-items: center;
        border-bottom: 0.3rem solid #fff;
        color: #fff;
        width: 50%;
        padding-bottom: 0.2rem;

        i{
            font-size: 1.5rem;
            margin: 0 1rem;
        }

        &:hover{
            cursor: pointer;
        }
    }

    /* Color change upon scroll classes */

    .colorChange{
        i{
            color: #000;
        }
        
        .search{
            color: #000;
            border-color: #000;
        }
    }

    /* Animations for showing pop-up elements */

    .show-element-enter-from, .show-element-leave-to{
        opacity: 0;
    }

    .show-element-enter-active, .show-element-leave-active{
        transition: all 0.4s;
    }

    .show-element-enter-to, .show-element-leave-from{
        opacity: 1;
    }

    /* Media queries */

    @media(max-width: 750px){
        .header-img-display{
            display: none;
        }

        .header-img{
            width: 100%;
        }
    }

    @media(max-width: 600px){
        .new-arrivals{
            font-size: 2.8rem;
        }
    }

    @media(max-width: 500px){
        .promotions h2{
            font-size: 2rem;
        }
    }

    @media(max-width: 400px){
        .promotions h2{
            font-size: 1.5rem;
        }

        .new-arrivals{
            font-size: 2.2rem;
        }

        .icons{
            padding: 1rem;
            i{
                font-size: 1.5rem;
            }
        }

        .search{
            width: 40%;
             margin-left: 7rem;
            font-size: 1.2rem;

            i{
                font-size: 1.2rem;
            }
        }
    }
</style>