<template>
    <base-heading>
    <!-- Basic section heading -->
        <template v-slot:heading>
            We stay together
        </template>
    </base-heading>
    <div class="community-and-social-media">
        <div class="community">
            <!-- Community pictures -->
            <div class="community-heading">
                <h2>#MECHANICALCOMMUNITY</h2>
                <p>Share your photos with the hashtag to win prizes</p>
            </div>
            <div class="community-images">
                <div class="image" data-tilt>
                    <img src="../../assets/community/community-img.jpeg" alt="">
                </div>
                <div class="image">
                    <img src="../../assets/community/community-img-2.jpeg" alt="">
                </div>
                <div class="image">
                    <img src="../../assets/community/community-img-3.jpeg" alt="">
                </div>
                <div class="image">
                    <img src="../../assets/community/community-img-4.jpeg" alt="">
                </div>
                <div class="image">
                    <img src="../../assets/community/community-img-5.jpeg" alt="">
                </div>
                <div class="image">
                    <img src="../../assets/community/community-img-6.jpeg" alt="">
                </div>
            </div>
        </div>
        <!-- Social media links -->
        <div class="social-media">
            <div class="icons">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-tiktok"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    /* Community main wrapper styling */

    .community-and-social-media{
        width: 100%;
        display: flex;
    }

    /* Community pictures styling */ 

    .community-heading{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2{
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        p{
            font-size: 1.5rem;
            text-transform: uppercase;
        }
    }
    
    .community{
        margin-left: 5rem;
        width: 80%;
    }

    .community-images{
        width: 100%;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;

        img{
            width: 25rem;
        }
    }

    .image{
        padding: 1rem;
    }

    /* Social media links styling */

    .social-media{
        width: 20%;
        display: flex;
        justify-content: center;
    }

    .icons{
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-left: 0.1rem solid #000;
        border-right: 0.1rem solid #000;

        i{
            font-size: 3rem;
            opacity: 0.9;
            transition: all 0.3s;

            &:hover{
                font-size: 4rem;
                opacity: 1;
                cursor: pointer;
            }
        }
    }

    @media(max-width: 600px){
        .community-and-social-media{
            flex-direction: column;
            align-items: center;
        }

        .community{
            margin-left: 0;
        }

        .social-media{
            height: 40vh;
        }

        
        .community-heading{
            h2{
                font-size: 1.8rem;
            }

            p{
                font-size: 1.2rem;
            }   
        }
    }
</style>