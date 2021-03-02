<template>
    <base-cover @click.self="hide">
        <template v-slot:default>
            <div class="search">
                <div class="icons">
                    <i class="fas fa-times" @click="hide"></i>
                    <i class="fas fa-user"></i>
                </div>
                <div class="search-input">
                    <input type="text" placeholder="What are you searching for?" v-model="searchQuery">
                </div>
                <div class="other-options">
                    <div class="last-searches">
                        <h2>Last Searches</h2>
                        <ul>
                            <li v-for="search in lastSearches" :key="search">{{ search }}</li>
                        </ul>
                    </div>
                    <div class="most-popular">
                        <h2>Most popular items</h2>
                        <div class="most-popular-items">
                            <div class="popular-item" v-for="item in mostPopular" :key="item.name">
                                <img :src="item.url">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="results">
                    <!-- Displaying first 5 results from the array of results -->
                    <div class="result" v-for="item in resultQuery.slice(0, 5)" :key="item">
                        <img :src="item.url" :alt="item.name">
                        <div class="name">{{item.name}}</div>
                    </div>
                </div>
            </div>
        </template>
    </base-cover>
</template>

<script>
export default {
    data() {
        return{
            // Last searches and most popular data for demo purposes
            lastSearches: ['jumper', 'hoodie', 'sweater'],
            mostPopular: [
                {
                    type: 'sweatshirt',
                    name: 'Black Counter Sweatshirt',
                    url: require('../../assets/most-popular/black-hoodie.jpg')
                },
                {
                    type: 'coat',
                    name: 'yellow dragon coat',
                    url: require('../../assets/most-popular/yellow-coat.jpg')
                },
                {
                    type: 'coat',
                    name: 'styled white coat',
                    url: require('../../assets/most-popular/stylish-coat.jpg')
                },
            ],
            // Getting all items from store and putting them into one array to search through,
            // If there was a database, a method could be written to concatanate them
            allItems: this.$store.state.sweatshirtsItems.concat(this.$store.state.mainSweatshirtItems).concat(this.$store.state.mainCoatItems).concat(this.$store.state.coatItems),
            searchQuery: null
        }
    },
    computed: {
        // Searching through the allItems array on every input after the input is longer than 2 characters
        resultQuery() {
            if(this.searchQuery && this.searchQuery.length >= 3){
                return this.allItems.filter(item => {
                    return this.searchQuery.toLowerCase().split(' ').every(v => item.keywords.toLowerCase().includes(v))
                })
            }else{
                return ''
            }
        }
    },
    // Getting the hideSearch method from the parent element
    inject: ['hide']
}
</script>

<style lang="scss" scoped>
    /* Main search styling */

    .search{
        position: fixed;
        width: 100%;
        height: 80vh;
        z-index: 900;
        background-color: #fff;
        display: flex;
        flex-direction: column;
    }

    /* Icons styling */

    .icons{
        position: absolute;
        top: 3rem;
        right: 3rem;
        font-size: 2rem;

        i{
            margin: 0 1rem;

            &:hover{
                cursor: pointer;
            }
        }
    }

    /* Input styling */

    .search-input{
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;

        input{
            width: 50%;
            height: 3rem;
            text-align: center;
            border: none;
            border-bottom: 0.1rem solid #000;
            font-size: 1.5rem;

            &::placeholder{
                text-align: center;
                text-transform: uppercase;
                transition: all 0.3s;
            }

            &:focus{
                outline: none;
                
                &::placeholder{
                    color: transparent;
                }
            }
        }
    }

    /* Most popular and last search styling */

    .other-options{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
    }

    .last-searches{
        width: 20%;

        ul{
            li{
                margin: 0.5rem 0;
                font-size: 1.3rem;
                transition: all 0.3s;

                &:hover{
                    cursor: pointer;
                    font-size: 1.4rem;
                }
            }
        }
    }

    .most-popular{
        width: 30%;
        display: flex;
        flex-direction: column;

        h2{
            margin-left: 0.2rem;
        }
    }

    .most-popular-items{
        display: flex;
    }

    .popular-item{
        padding: 0.2rem;
        opacity: 0.8;
        transition: opacity 0.3s;

        img{
            width: 10rem;
        }

        &:hover{
            cursor: pointer;
            opacity: 1;
        }
    }

    /* Results styling */

    .results{
        display: flex;
        width: 100%;
        justify-content: space-around;
        border-top: 0.1rem solid #000;
        padding: 2rem;
        flex-wrap: wrap;
    }

    .result{
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 10rem;
        }

        &:hover{
            cursor: pointer;
        }
    }

    .name{
        text-align: center;
        font-size: 1.5rem;
    }

    /*Media queries */

    @media(max-width: 650px){
        .other-options{
            display: none;
        }
    }

    @media(max-width: 550px){
        .search-input{
            input{
                width: 80%;
            }
        }
    }
</style>