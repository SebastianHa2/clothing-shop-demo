import { createApp } from 'vue'
import App from './App.vue'
import  { createRouter, createWebHashHistory} from 'vue-router'
import {createStore} from 'vuex'

// Importing components that are through routing and in more than one components
import ManOption from './components/sex-options/ManOption.vue'
import WomanOption from './components/sex-options/WomanOption.vue'
import ShopNowButton from './components/BaseButtons/ShopNowButton.vue'
import AddToCart from './components/BaseButtons/AddToCart.vue'
import BaseHeading from './components/BaseHeadings/BaseHeading.vue'
import BaseCover from './components/BaseCover/BaseCover.vue'
import SearchContainer from './components/containers/SearchContainer.vue'
import ItemsContainer from './components/containers/ItemsContainer.vue'
import CartContainer from './components/containers/CartContainer.vue'
import SignInContainer from './components/containers/SignInContainer.vue'
import RegistrationContainer from './components/containers/RegistrationContainer.vue'

// Importing components for demo item presentation
import CoatItemsMan from './components/sex-options/man/man-items/coats/CoatItemsMan.vue'
import SweatshirtsItemsMan from './components/sex-options/man/man-items/sweatshirts/SweatshirtsItemsMan.vue'


// Global store for data used across the whole website / hard-coded for demo purposes
const store = createStore({
    state() {
        return{
            sweatshirtsItems: [
                {
                    type: 'sweatshirt',
                    name: 'blue-zipneck',
                    url: require('./assets/man/man-items/sweatshirts/blue-zip-neck-sweatshirt.jpg'),
                    url2: require('./assets/man/man-items/sweatshirts/blue-zip-neck-sweatshirt-2.jpg'),
                    urlActive: require('./assets/man/man-items/sweatshirts/blue-zip-neck-sweatshirt.jpg'),
                    keywords: 'sweatshirt blue zip neck hoodie long sleeve',
                    price: 60
                },
                {
                    type: 'sweatshirt',
                    name: 'striped-jack',
                    url: require('./assets/man/man-items/sweatshirts/striped-jack.jpg'),
                    url2: require('./assets/man/man-items/sweatshirts/striped-jack-2.jpg'),
                    urlActive: require('./assets/man/man-items/sweatshirts/striped-jack.jpg'),
                    keywords: 'sweatshirt striped stripes long sleeve',
                    price: 80
                },
                {
                    type: 'sweatshirt',
                    name: 'sunburn-blue',
                    url: require('./assets/man/man-items/sweatshirts/sunburn-blue.jpg'),
                    url2: require('./assets/man/man-items/sweatshirts/sunburn-blue-2.jpg'),
                    urlActive: require('./assets/man/man-items/sweatshirts/sunburn-blue-2.jpg'),
                    keywords: 'sweatshirt blue long sleeve',
                    price: 75
                }
            ],
            mainSweatshirtItems: [
                {
                    type: 'sweatshirt',
                    name: 'red-blitz-sweatshirt',
                    url: require('./assets/man/man-items/sweatshirts/red-blitz-sweatshirt.jpg'),
                    url2: require('./assets/man/man-items/sweatshirts/red-blitz-sweatshirt-2.jpg'),
                    url3: require('./assets/man/man-items/sweatshirts/red-blitz-sweatshirt-3.jpg'),
                    keywords: 'sweatshirt red blitz long sleeve',
                    price: 50
                },
                {
                    type: 'sweatshirt',
                    name: 'black-basic',
                    url: require('./assets/man/man-items/sweatshirts/black-basic-sweatshirt.jpg'),
                    url2: require('./assets/man/man-items/sweatshirts/black-basic-sweatshirt-2.jpg'),
                    url3: require('./assets/man/man-items/sweatshirts/black-basic-sweatshirt-3.jpg'),
                    keywords: 'sweatshirt basic black long hoodie sleeve',
                    price: 20
                }
            ],
            mainCoatItems: [
                {
                    type: 'jacket',
                    name: 'check-hooded-jacket',
                    url: require('./assets/man/man-items/coats/check-hooded-jacket.jpg'),
                    url2: require('./assets/man/man-items/coats/check-hooded-jacket-2.jpg'),
                    url3: require('./assets/man/man-items/coats/check-hooded-jacket-3.jpg'),
                    keywords: 'coat hood check chequered hoodie red jacket',
                    price: 40
                },
                {
                    type: 'jacket',
                    name: 'green-coat',
                    url: require('./assets/man/man-items/coats/green-coat-man.jpg'),
                    url2: require('./assets/man/man-items/coats/green-coat-man-2.jpg'),
                    url3: require('./assets/man/man-items/coats/green-coat-man-3.jpg'),
                    keywords: 'coat hood jacket green',
                    price: 50
                }
            ],
            coatItems: [
                {
                    type: 'jacket',
                    name: 'sports-padded-jacket',
                    url: require('./assets/man/man-items/coats/sports-padded-jacket.jpg'),
                    url2: require('./assets/man/man-items/coats/sports-padded-jacket-2.jpg'),
                    urlActive: require('./assets/man/man-items/coats/sports-padded-jacket.jpg'),
                    keywords: 'jacket sport padded coat big',
                    price: 60
                },
                {
                    type: 'jacket',
                    name: 'blue-mountain-coat',
                    url: require('./assets/man/man-items/coats/blue-mountain-coat.jpg'),
                    url2: require('./assets/man/man-items/coats/blue-mountain-coat-2.jpg'),
                    urlActive: require('./assets/man/man-items/coats/blue-mountain-coat.jpg'),
                    keywords: 'mountain blue coat jacket rain water resistant',
                    price: 80
                },
                {
                    type: 'jacket',
                    name: 'navy-waterproof-coat',
                    url: require('./assets/man/man-items/coats/navy-waterproof-coat.jpg'),
                    url2: require('./assets/man/man-items/coats/navy-waterproof-coat-2.jpg'),
                    urlActive: require('./assets/man/man-items/coats/navy-waterproof-coat-2.jpg'),
                    keywords: 'jacket waterproof resistant navy coat rain blue',
                    price: 75
                },
                {
                    type: 'jacket',
                    name: 'quilted-jacket',
                    url: require('./assets/man/man-items/coats/quilted-jacket.jpg'),
                    url2: require('./assets/man/man-items/coats/quilted-jacket-2.jpg'),
                    urlActive: require('./assets/man/man-items/coats/quilted-jacket-2.jpg'),
                    keywords: 'quilted jacket coat',
                    price: 60

                }
            ],
            cart: [],
            manOption: false,
            hide: '',
            signedIn: false,
            signedInUser: {},
            registeredUsers: [
                {
                    firstName: "Sebastian",
                    secondName: "Haczela",
                    userName: "hacza212",
                    userEmail: "sebastian@gmail.com",
                    password: "Seb@stian212"
                }
            ]
        }
    },
    mutations: {
        // Add item to cart 
        // Checking if item has a quantity property, if so it's already in the cart
        // So I increase the quantity, else we set the quantity to 1 and push the item to the
        // cart array
        addItemToCart(state, item) {
            if(item.quantity){
               item.quantity += 1
            }else{
                item.quantity = 1
                state.cart.push(item)
            }
        },
        // Delete item from cart
        // Looking for the item in the cart using its unique name and 
        // when found splicing the array at its index
        deleteItemFromCart(state, item) {
            state.cart.forEach(element => {
                if(element.name === item.name){
                    let index = state.cart.indexOf(element)
                    state.cart.splice(index, 1)
                }
            })
        },
        // Increase / decrease methods
        increaseQuantity(__state, item) {
            item.quantity += 1
        },
        decreaseQuantity(state, item) {
            item.quantity -= 1
            // If after decreasing the quantity is 0, delete the item from the cart array
            if(item.quantity === 0){
                state.cart.forEach(element => {
                    if(element.name === item.name){
                       let index = state.cart.indexOf(element)
                       state.cart.splice(index, 1)
                    }
                })
            }
        },
        // Setting this option to true if we're in the man's section for display of different 
        // navigation options 
        setManOptionTrue(state){
            state.manOption = true
        },
        setManOptionFalse(state){
            state.manOption = false
        },
        registerNewUser(state, user){
            state.registeredUsers.push(user)
        },
        signIn(state, user){
            state.signedIn = true
            state.signedInUser = user
        }
    }
})


// Routing to different urls using vue-router
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/', component: App, name="main"
        },
        {
            path: '/man', component: ManOption, name: "man"
        },
        {
            path: '/woman', component: WomanOption, name: "woman"
        },
        {
            path: '/coat-items-man', component: CoatItemsMan, name:"coat-items-man"
        },
        {
            path:'/sweatshirts-items-man', component: SweatshirtsItemsMan, name: "sweatshirts-items-man"
        },
        {
            path: '/registration', component: RegistrationContainer, name: "registration"
        }
    ]
})

const app = createApp(App)

// Connecting the components
app.component('man-option', ManOption)
app.component('woman-option', WomanOption)
app.component('shop-now-button', ShopNowButton)
app.component('base-heading', BaseHeading)
app.component('base-cover', BaseCover)
app.component('search-container', SearchContainer)
app.component('items-container', ItemsContainer)
app.component('add-to-cart', AddToCart)
app.component('cart-container', CartContainer)
app.component('sign-in-container', SignInContainer)
app.component('registration-container', RegistrationContainer)


app.component('coat-items-man', CoatItemsMan)
app.component('sweatshirts-items-man', SweatshirtsItemsMan)

app.use(store)
app.use(router)

app.mount('#app')
