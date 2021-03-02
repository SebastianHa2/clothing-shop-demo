<!-- Base shop now button -->

<template>
    <button>Shop Now</button>
</template>

<style scoped>
    button{
        padding: 1rem 3rem;
        text-transform: uppercase;
        font-size: 1.5rem;
        background: transparent;
        color: #fff;
        border: 0.2rem solid #fff;
        transition: all 0.4s;
    }

    button:hover{
        background-color: #fff;
        color: #000;
        cursor: pointer;
    }

    @media(max-width: 600px){
        button{
            padding: 0.5rem 1.5rem;
            font-size: 1rem;
        }
    }
</style>
