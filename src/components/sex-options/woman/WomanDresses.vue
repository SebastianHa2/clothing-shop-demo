<!-- Women dresses for main page display -->

<template>
    <div class="dresses">
        <div class="dress">
            <img src="../../../assets/woman/dresses/dress-1.jpeg" alt="">
        </div>

        <div class="dress dress-2">
            <img src="../../../assets/woman/dresses/dress-2.jpeg" alt="">
        </div>

        <button>Check out our new dress collection</button>
    </div>
</template>

<style lang="scss" scoped>

    .dresses{
        width: 100%;
        height: 130vh;
        display: flex;
        padding: 10rem 0;
        position: relative;
        background-image: linear-gradient(#fff, #3da4ab, #fe9c8f, #fff);
    }

    .dress{
        height: 100%;
        width: 50%;
        padding: 0 10rem;

        img{
            width: 100%;
            height: 100%;
        }
    }

    button{
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-transform: uppercase;
        font-size: 2.5rem;
        color: #fff;
        padding: 1rem 2rem;
        border: 0.1rem solid #fff;
        background-color: transparent;
        transition: all 0.4s;

        &:hover{
            background: #fff;
            opacity: 0.8;
            color: #3da4ab;
            cursor: pointer;
        }
    }

    /* Media queries */

    @media(max-width: 1050px){
        .dresses{
            height: 100vh;
        }
    }

    @media(max-width: 900px){
        .dresses{
            .dress{
                padding: 0 5rem;
                img{
                    width: 100%;
                }
            }
        }
    }

    @media(max-width: 800px){

        button{
            font-size: 1.5rem;
        }
    }

    @media(max-width: 700px){
        .dresses{
            .dress{
                padding: 0 2rem;
            }
        }
    }

    @media(max-width: 500px){
        .dresses{
            .dress{
                padding: 1rem;
            }
        }
    }

    @media(max-width: 450px){

        .dresses{
            justify-content: center;
            .dress{
                width: 100%;
                display: flex;
                justify-content: center;
                img{
                   width: 60%;
                }
            }

            .dress-2{
                display: none;
            }
        }

        button{
            padding: 0.5rem 1rem;
            font-size: 1rem;
        }
    }

    @media(max-width: 350px){
        .dresses{
            .dress{
                img{
                    width: 80%;
                }
            }
        }
    }
</style>