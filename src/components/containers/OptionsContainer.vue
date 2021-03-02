<!-- First page with gender options -->

<template>
<!-- Man option -->
  <div class="options">
    <div class="man-option">
      <div class="option-img-wrapper">
        <img src='../../assets/first-page-images/man-option.jpeg' alt="man-option-image">
      </div>
    <router-link class="option-link" to="/man">Man</router-link>
    </div>
  <!-- Woman option -->
    <div class="woman-option">
      <div class="option-img-wrapper">
        <img src='../../assets/first-page-images/woman-option.jpeg' alt="woman-option-image">
      </div>
      <router-link class="option-link" to="/woman">Woman</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>

/* Options styling */ 

  .options{
    width: 100%;
    height: 100vh;
    display: flex;
  }

  .man-option{
    width: 50vw;
    height: 100vh;
    position: relative;
  }

  .woman-option{
    width: 50vw;
    height: 100vh;
    position: relative;
  }

  .option-img-wrapper{
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);

    img{
      width: 100%;
      height: 100%;
    }
  }

  .option-link{
    font-size: 5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    color: #fff;
    text-shadow: 0.2rem 0.5rem 0.8rem #000;
    animation: option-link-animation 2s ease-in-out;

    &:hover{
      font-size: 7rem;
    }
  }

  /* Options animation */

  @keyframes option-link-animation {
    0% {
      top: -10rem;
    }

    100%{
      top: 50%;
    }
  }
</style>