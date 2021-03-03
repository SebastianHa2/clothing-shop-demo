<template>
    <base-cover>
        <template v-slot:default>
            <div class="successful-registration">
                <h1>Congratulations!</h1>
                <h3>You've registered successfully</h3>
                <button><a href="#">Go shopping</a></button>
            </div>
        </template>
    </base-cover>
</template>

<style lang="scss" scoped>
    .successful-registration{
        width: 20vw;
        height: 30vh;
        background-color: rgba(255, 255, 255, 0.9);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;

        h1, h3{
            width: 100%;
            text-align: center;
            margin-top: 2rem;
        }

        button{
            width: 50%;
            margin: auto;
            padding: 0.8rem 0;
            font-size: 1.2rem;
            text-transform: uppercase;
            transition: all 0.3s;
            
            &:hover{
                background-color: #000;
                color: #fff;
                cursor: pointer;
            }

            a{
                color: #000;
            }
        }
    }

    /* Media queries */

    @media(max-width: 1150px){
        .successful-registration{
            width: 35vw;
            height: 35vh;
        }
    }

    @media(max-width: 850px){
        .successful-registration{
            width: 45vw;
        }
    }

    @media(max-width: 500px){
        .successful-registration{
            width: 55vw;
        }
    }

    @media(max-width: 350px){
        .successful-registration{
            width: 65vw;
        }
    }
</style>