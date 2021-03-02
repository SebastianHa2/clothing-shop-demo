<!-- Items list container -->

<template>
    <div class="logo">
        <h1>Mechanical</h1>
    </div>
    <transition name="show-element">
        <search-container v-if="showElement === 'search'"></search-container>
    </transition>
    <transition name="show-element">
        <cart-container v-if="showElement === 'cart'"></cart-container>
    </transition>
    <transition name="show-element">
        <sign-in-container v-if="showElement === 'sign-in'"></sign-in-container>
    </transition>
    <nav-container class="nav"></nav-container>
    <slot name="items"></slot>
    <footer-container></footer-container>
    <div class="icons" :class="{colorChange: true}">
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
</template>

<script>
import NavContainer from './NavContainer.vue'
import FooterContainer from './FooterContainer'
export default {
    components: {NavContainer, FooterContainer},
    data() {
        return{
            colorChange: false,
            overflowHidden: false,
            showElement: ''
        }
    },
    methods: {
        // Change colour method on scroll
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
        // Passing the methods to its components 
        provide() {
            return{
                hide: this.hide,
                show: this.show
            }
        },
        // Scroll listener
        mounted() {
            window.addEventListener("scroll", this.onScroll)
        }
}
</script>

<style lang="scss" scoped>

    /* Logo styling */
    .logo{
        position: absolute;
        top: 5rem;
        left: 50%;
        transform: translate(-50%);
        font-family: 'Bebas Neue', cursive;
        text-transform: uppercase;
        font-size: 3rem;
        color: #000;
        letter-spacing: 0.2rem;
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

        i{
            font-size: 2rem;
            color: #fff;

            &:hover{
                cursor: pointer;
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


    /* Color change classes */

    .colorChange {
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

    @media(max-width: 400px){
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