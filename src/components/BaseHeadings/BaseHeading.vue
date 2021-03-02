<template>
    <div class="base-heading">
        <h2>
            <slot name="heading"></slot>
        </h2>
    </div>
</template>

<style lang="scss" scoped>

    .base-heading{
        margin: 5rem 0;
        width: 100%;
        height: 15vh;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 0.2rem solid #000;
        border-bottom: 0.2rem solid #000;
    }

    h2{
        font-size: 3rem;
        text-transform: uppercase;
    }

    @media(max-width: 650px){
        .base-heading{
            margin: 3rem 0;

            h2{
                font-size: 2rem;
            }
        }
    }

    @media(max-width: 400px){
        .base-heading{
            h2{
                font-size: 1.6rem;
            }
        }
    }
</style>