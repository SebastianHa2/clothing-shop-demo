<!-- Base cover background for pop ups -->

<template>
    <div class="cover">
        <slot></slot>
    </div>
</template>

<style scoped>
    .cover{
        background-color: rgba(0, 0, 0, 0.6);
        position: fixed;
        top: 0;
        left: 0; 
        width: 100vw;
        height: 100vh;
        z-index: 300;
    }
</style>