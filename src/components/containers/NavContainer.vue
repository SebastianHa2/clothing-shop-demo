<template>
    <div class="navigation">
        <nav @mouseleave="slideBackgroundBack" :class="{hidden: !showNavBar}">
            <i v-if="background" class="fas fa-times" @click="showNavBar = false"></i>
            <div class="nav-background" :class="{slide: background}"></div>
                <ul @mouseenter="slideBackground" :class="{colorBg: background}">
                    <li class="sex-selection"><a href="#" @click="$router.push({name: 'man', hash: 'man'})">MAN</a> | <a href="#" @click="$router.push({name: 'woman', hash: 'woman'})">WOMAN</a></li>
                    <li>Sale</li>
                    <li>New</li>
                    <li @click="makeActive('clothing')">Clothing</li>
                    <li @click="makeActive('shoes')">Shoes</li>
                    <li>Accessories</li>
                </ul>
                <!-- Clothing option for men -->
                <div class="additional-nav" v-if="active === 'clothing' && $store.state.manOption">
                    <div class="nav-background-2" :class="{slide: active === 'clothing'}"></div>
                    <ul>
                        <li @click="$router.push('/coat-items-man')">Coats / Jackets</li>
                        <li @click="$router.push('/sweatshirts-items-man')" >Sweatshirts</li>
                        <li>T-shirts</li>
                        <li>Trousers</li>
                        <li>Hats</li>
                    </ul>
                </div>
                <!-- Clothing option for women -->
                <div class="additional-nav" v-if="active === 'clothing' && !$store.state.manOption">
                    <div class="nav-background-2" :class="{slide: active === 'clothing'}"></div>
                    <ul>
                        <li>Coats / Jackets</li>
                        <li>Sweatshirts</li>
                        <li>T-shirts</li>
                        <li>Trousers</li>
                        <li>Dresses</li>
                        <li>Hats</li>
                    </ul>
                </div>
                <div class="additional-nav" v-if="active === 'shoes'">
                    <div class="nav-background-2" :class="{slide: active === 'shoes'}"></div>
                    <ul>
                        <li>Casual</li>
                        <li>Running</li>
                        <li>Elegant</li>
                    </ul>
                </div>
        </nav>
        <transition name="menu">
            <div class="hamburger-menu" v-if="!showNavBar" @click="showNav">
                <div class="line line-1" :class="{colorChange: colorChange}">#</div>
                <div class="line line-2" :class="{colorChange: colorChange}">#</div>
                <div class="line line-3" :class="{colorChange: colorChange}">#</div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return{
            background: false,
            showNavBar: true,
            lastScrollPosition: 0,
            colorChange: false,
            active: ''
        }
    },
    methods: {
        // Making navigation background appear on hover
        slideBackground() {
            this.background = true;
        },
        slideBackgroundBack() {
            this.background = false;
            this.active = ''
        },
        hideNav() {
            this.showNavBar = false;
        },
        showNav() {
            this.showNavBar = true;
        },

        // Changing navigation to hamburger menu when scrolled down and showing it when scrolling up
        // Also changing the colour when scrolled down past a certain point
        onScroll() {
            const currentScrollPosition = window.pageYOffset
            if (currentScrollPosition < 0) {
                return
            }
            if(Math.abs(currentScrollPosition - this.lastScrollPosition) < 60){
                return
            }
            if(this.lastScrollPosition > 1300){
                this.colorChange = true
            }else{
                this.colorChange = false
            }
            this.showNavBar = currentScrollPosition < this.lastScrollPosition
            this.lastScrollPosition = currentScrollPosition
        },
        // Making a nav choice active 
        makeActive(choice) {
            this.active = choice;
        }
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll)
    }
}
</script>

<style lang="scss" scoped>

    nav{
        height: 70vh;
        width: 30rem;
        position: fixed;
        top: 5rem;
        left: 0;
        padding: 3rem;
        z-index: 100;

        i{
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            font-size: 2rem;
            z-index: 1000;

            &:hover{
                cursor: pointer;
            }
        }
    }

    .additional-nav{
        position: absolute;
        padding: 2rem;
        top: 50%;
        transform: translateY(-50%);
        left: 100%;
        width: 20rem;

        ul{
            li{
                color: #000;
                font-size: 1.5rem;
                margin: 1rem 0;
            }
        }
    }

    .hidden{
        left: -50rem;
    }

    ul{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        z-index: 50;
        position: relative;

        li{
            font-size: 2rem;
            color: #fff;

            a{
                color: #fff;

                &:hover{
                    font-weight: bolder
                }
            }

            &:hover{
                cursor: pointer;
                font-weight: bolder;
            }
        }
    }

    .nav-background{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        width: 0;
        transition: width 0.3s;
        opacity: 0.8;
        border-radius: 0 0.5rem 0.5rem 0;
    }

    .nav-background-2{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        width: 0;
        transition: width 0.3s;
        opacity: 0.8;
        border-radius: 0 0.5rem 0.5rem 0;
    }

    .slide{
        width: 100%;
        z-index: 10;
    }

    .colorBg{
        li{
            color: #000;

            a{
                color: #000;
            }
        }
        
    }

    .sex-selection{
        color: #fff;
        font-size: 2.5rem;
        
        &:hover{
            font-weight: normal;
        }
    }

    .hamburger-menu{
        width: 5rem;
        height: 5rem;
        position: fixed;
        top: 5rem;
        left: 5rem;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 100;
        transition: all 0.3s;

        &:hover{
            cursor: pointer;
            transform: scale(1.05)
        }
    }

    .line{
        width: 80%;
        height: 0.5rem;
        background-color: #fff;
        margin-bottom: 0.5rem;
        font-size: 0;
    }  

    .line-2{
        width: 50%;
    }

    .colorChange{
        background-color: #000;
    }

    /* Animations */

    .menu-enter-from{
        top: -10rem;
    }

    .menu-enter-active{
        top: -5rem;
        transition: all 1s;
    }

    .menu-enter-to{
        top: 5rem;
    }

    .menu-leave-from{
        left: 5rem;
    }

    .menu-leave-active{
        transition: all 0.5s;
    }

    .menu-leave-to{
        left: -5rem;
    }

    /* Media queries */

    @media(max-width: 500px){
        .additional-nav{
            left: 50%;
            z-index: 500;
        }

        .nav-background-2{
            background-color: transparent;
        }
    }

</style>